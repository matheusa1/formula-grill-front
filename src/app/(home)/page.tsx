import { FC } from 'react'
import Reservations from './reservations'
import InitialPage from './initialPage'
import About from './about'

const Home: FC = () => {
  return (
    <div className={''}>
      <InitialPage />
      <About />
      <Reservations />
    </div>
  )
}

export default Home
