'use client'

import ReservationsProfileCards from '@/components/molecules/ReservationsProfileCards'
import { useAuth } from '@/context/AuthContext'
import { getMyReservations } from '@/services/api'
import { FC } from 'react'
import ReactLoading from 'react-loading'
import { useQuery } from 'react-query'

const ProfileBody: FC = () => {
  const { token } = useAuth()

  const { data: reservations, isLoading } = useQuery({
    queryKey: 'reservationsProfile',
    queryFn: async () => {
      const res = await getMyReservations(token!)
        .then((res) => res)
        .catch(() => [])

      return res
    },
  })

  return (
    <div className={'flex flex-col items-center gap-5'}>
      <h1 className="text-xl font-bold">Minhas reservas</h1>
      {isLoading ? (
        <ReactLoading
          className="self-center"
          width={36}
          type="spin"
          color="black"
        />
      ) : (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4 lg:gap-8 xl:grid-cols-5">
          {reservations?.map((res, index) => (
            <ReservationsProfileCards reservation={res} key={index} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProfileBody
