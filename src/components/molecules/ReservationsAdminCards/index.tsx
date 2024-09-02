'use client'

import { FC } from 'react'
import { TReservationsAdminCards } from './types'
import { Button } from '@/components/atoms/Button'
import { useMutation, useQueryClient } from 'react-query'
import { cancelReservation } from '@/services/api'
import { useAuth } from '@/context/AuthContext'
import { TReservationsResponse } from '@/types/reservationsType'
import { toast } from 'react-toastify'

const ReservationsAdminCards: FC<TReservationsAdminCards> = ({
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
      const cachedData = queryClient.getQueryData('reservationsAdmin')

      if (cachedData) {
        queryClient.setQueryData(
          'reservationsAdmin',
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
    <div
      className={
        'flex max-w-xs flex-col gap-2  rounded-md border bg-white p-4 text-black shadow-lg '
      }
    >
      <header>
        <strong className="text-xl">{reservation.name}</strong>
      </header>
      <main className="flex flex-col gap-1">
        <p className="flex gap-2">
          <strong>Data: </strong> {date}
        </p>
        <p className="flex gap-2">
          <strong>Hora Inicio: </strong> {startHour}
        </p>
        <p className="flex gap-2">
          <strong>Hora Fim: </strong> {endHour}
        </p>
        <p className="flex gap-2">
          <strong>Pessoas: </strong> {reservation.seatCount}
        </p>
        <p className="flex gap-2">
          <strong>Mesa: </strong> {reservation.mesaId}
        </p>
        <p className="flex gap-2">
          <strong>Usuário: </strong> {reservation.userID}
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

export default ReservationsAdminCards
