import { FC } from 'react'
import Reservations from './reservations'
import InitialPage from './initialPage'
import FoodCarousel from './FoodCarousel'
import About from './about'

const Home: FC = () => {
  return (
    <div className={''}>
      <InitialPage />
      <FoodCarousel />
      <About />
      <Reservations />
    </div>
  )
}

export default Home
