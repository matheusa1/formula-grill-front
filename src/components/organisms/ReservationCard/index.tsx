import ReservationForm from '@/components/molecules/ReservationForm'
import { FC } from 'react'

const ReservationCard: FC = () => {
  return (
    <div className={'flex flex-col gap-8 bg-black/50 px-5 py-9'}>
      <h1 className="text-center text-3xl font-bold">RESERVAR</h1>
      <ReservationForm />
    </div>
  )
}

export default ReservationCard
