'use client'

import Switch from '@/components/atoms/Switch'
import { useAuth } from '@/context/AuthContext'
import { updateTable } from '@/services/api'
import { TAxiosErrorApi } from '@/types/error'
import { TTable } from '@/types/tableType'
import { CircleCheck, HandPlatter, Sofa } from 'lucide-react'
import { FC, useCallback, useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'

const TableCard: FC<TTable> = ({ code, id, seats, status }) => {
  const { token } = useAuth()
  const [isAvailable, setIsAvailable] = useState(status)

  const { mutateAsync: updateTableFn } = useMutation({
    mutationFn: updateTable,
    mutationKey: ['updateTable'],
    onSuccess: (data) => {
      console.log({ data })
      toast.success('Mesa atualizada com sucesso!')

      setIsAvailable(data.status)
    },
    onError: (err: TAxiosErrorApi) => {
      console.log({ err: err.response?.data })

      toast.error(err.response?.data.message)
    },
  })

  const handleUpdateTable = useCallback(async () => {
    await updateTableFn({
      data: {
        id,
        code,
        seats,
        status: !isAvailable,
      },
      token: token!,
    })
  }, [code, id, isAvailable, seats, token, updateTableFn])

  useEffect(() => {}, [isAvailable])

  return (
    <main
      className={
        'flex h-fit w-11/12 max-w-96 flex-col  gap-4 rounded-xl bg-white p-8 drop-shadow-lg transition hover:scale-105'
      }
      id={String(id)}
    >
      <header className="flex items-center justify-center gap-4">
        <HandPlatter />
        <h1>Mesa {code}</h1>
      </header>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Sofa />
          <span>Assentos</span>
        </div>
        <strong>{seats}</strong>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <CircleCheck />
          <span>Disponível?</span>
        </div>
        <Switch checked={isAvailable} onHandleChange={handleUpdateTable} />
      </div>
    </main>
  )
}

export default TableCard
