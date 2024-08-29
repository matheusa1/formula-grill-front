import ReservationCard from '@/components/organisms/ReservationCard'
import { FC } from 'react'

const Reservations: FC = () => {
  return (
    <section
      id="reservation"
      className={
        'grid min-h-screen place-items-center bg-black bg-carbon text-white'
      }
    >
      <ReservationCard />
    </section>
  )
}

export default Reservations
