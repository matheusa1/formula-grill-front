import { FC } from 'react'
import Reservations from './reservations'
import InitialPage from './initialPage'
import FoodCarousel from './FoodCarousel'

const Home: FC = () => {
  return (
    <div className={''}>
      <InitialPage />
      <FoodCarousel />
      <Reservations />
    </div>
  )
}

export default Home
