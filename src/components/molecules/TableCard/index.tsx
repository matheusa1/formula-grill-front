'use client'

import Switch from '@/components/atoms/Switch'
import { TTable } from '@/types/tableType'
import { CircleCheck, HandPlatter, Sofa } from 'lucide-react'
import { FC, useState } from 'react'

const TableCard: FC<TTable> = ({ code, id, seats, status }) => {
  const [isAvailable, setIsAvailable] = useState(status)

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
        <Switch
          checked={isAvailable}
          onHandleChange={() => {
            setIsAvailable((prevState) => !prevState)
          }}
        />
      </div>
    </main>
  )
}

export default TableCard
