import { FC } from 'react'
import { TAdminReservationsList } from './types'
import ReservationsAdminCards from '@/components/molecules/ReservationsAdminCards'

const AdminReservationsList: FC<TAdminReservationsList> = ({ data }) => {
  return (
    <div
      className={
        'grid w-full grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'
      }
    >
      {data.map((reservation) => (
        <ReservationsAdminCards
          key={reservation.id}
          reservation={reservation}
        />
      ))}
    </div>
  )
}

export default AdminReservationsList
