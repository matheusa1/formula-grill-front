'use client'

import { ShoppingBag } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FC, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const PaymentHeader: FC = () => {
  const [payed, setPayed] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      if (payed === false) {
        toast.success('Reserva realizada com sucesso, voltando a tela inicial')
        setPayed(true)

        setTimeout(() => {
          router.push('/')
        }, 5000)
      }
    }, 3000)
  }, [payed, router])

  return (
    <div
      className={
        'flex w-full flex-col items-center justify-center gap-5 text-center text-white'
      }
    >
      <h1 className="text-xl font-bold">
        {payed
          ? 'Sua reserva foi realizada com sucesso!'
          : 'Somente mais uma volta para sua reserva...'}
      </h1>
      <div
        className={`rounded-full ${payed ? 'bg-green-500' : 'bg-yellow-500'} p-3`}
      >
        <ShoppingBag className="text-9xl" />
      </div>
    </div>
  )
}

export default PaymentHeader
