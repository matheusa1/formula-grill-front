import { FC } from 'react'
import Reservations from './reservations'
import InitialPage from './initialPage'
import FoodCarousel from './FoodCarousel'
import About from './about'
import Chefs from './Chefs'

const Home: FC = () => {
  return (
    <div className={''}>
      <InitialPage />
      <FoodCarousel />
      <About />
      <Chefs />
      <Reservations />
    </div>
  )
}

export default Home
