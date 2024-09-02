'use client'

import AdminReservationsList from '@/components/organisms/AdminReservationsList'
import { useAuth } from '@/context/AuthContext'
import { getAllReservations } from '@/services/api'
import { TReservationsResponse } from '@/types/reservationsType'
import { FC } from 'react'
import ReactLoading from 'react-loading'
import { useQuery } from 'react-query'

const Reservations: FC = () => {
  const { token } = useAuth()

  const { data: reservations, isLoading } = useQuery({
    queryKey: 'reservationsAdmin',
    queryFn: async () => {
      const res = await getAllReservations(token!)
        .then((res) => res)
        .catch(() => [] as TReservationsResponse[])
      return res
    },
  })

  return (
    <div className={'flex flex-col items-center gap-5'}>
      <header>
        <h1 className="text-2xl font-bold">Reservations</h1>
      </header>
      {isLoading ? (
        <ReactLoading
          className="self-center"
          width={36}
          type="spin"
          color="black"
        />
      ) : (
        <AdminReservationsList data={reservations ? reservations : []} />
      )}
    </div>
  )
}

export default Reservations
