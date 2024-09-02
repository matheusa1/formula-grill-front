'use client'

import { FC } from 'react'
import { TReservationsProfileCards } from './types'
import { Button } from '@/components/atoms/Button'
import { useMutation, useQueryClient } from 'react-query'
import { cancelReservation } from '@/services/api'
import { useAuth } from '@/context/AuthContext'
import { TReservationsResponse } from '@/types/reservationsType'
import { toast } from 'react-toastify'

const ReservationsProfileCards: FC<TReservationsProfileCards> = ({
  reservation,
}) => {
  const queryClient = useQueryClient()

  const { token } = useAuth()
  const date = new Date(reservation.dateStart).toLocaleDateString('pt-BR')
  const startHour = new Date(reservation.dateStart)
    .toLocaleTimeString('pt-BR')
    .split(':')
    .slice(0, 2)
    .join(':')
  const endHour = new Date(reservation.dateEnd)
    .toLocaleTimeString('pt-BR')
    .split(':')
    .slice(0, 2)
    .join(':')

  const isPossibleToCancel = new Date(reservation.dateStart) > new Date()

  const { mutateAsync: cancelReservationFn } = useMutation({
    mutationKey: 'cancelReservation',
    mutationFn: cancelReservation,
    onSuccess: () => {
      const cachedData = queryClient.getQueryData('reservationsProfile')

      if (cachedData) {
        queryClient.setQueryData(
          'reservationsProfile',
          (cachedData as []).filter(
            (res: TReservationsResponse) => res.id !== reservation.id,
          ),
        )
      }

      toast.success('Reserva cancelada com sucesso')
    },
    onError: () => {
      toast.error('Erro ao cancelar reserva')
    },
  })

  const onHandleCancel = () => {
    cancelReservationFn({ id: reservation.id, token: token! })
  }

  return (
    <div className={'flex flex-col gap-2 rounded-md bg-white p-4 text-black '}>
      <header>
        <strong className="text-xl">{date}</strong>
      </header>
      <main className="flex flex-col gap-1">
        <p className="flex gap-2">
          <strong>Hora Inicio: </strong> {startHour}
        </p>
        <p className="flex gap-2">
          <strong>Hora Fim: </strong> {endHour}
        </p>
        <p className="flex gap-2">
          <strong>Nome: </strong> {reservation.name}
        </p>
        <p className="flex gap-2">
          <strong>Pessoas: </strong> {reservation.seatCount}
        </p>
        <p className="flex gap-2">
          <strong>Mesa: </strong> {reservation.mesaId}
        </p>
      </main>
      <footer>
        <Button.Root
          size="sm"
          onClick={isPossibleToCancel ? onHandleCancel : () => {}}
          className={`w-full ${isPossibleToCancel ? 'border-red-500 bg-red-500 hover:border-red-300 hover:bg-red-300 hover:drop-shadow-red' : ''}`}
        >
          <Button.Text>
            {isPossibleToCancel ? 'Cancelar' : 'Comprovante'}
          </Button.Text>
        </Button.Root>
      </footer>
    </div>
  )
}

export default ReservationsProfileCards
