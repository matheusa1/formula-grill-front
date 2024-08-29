import { FC } from 'react'
import Reservations from './reservations'
import InitialPage from './initialPage'

const Home: FC = () => {
  return (
    <div className={''}>
      <InitialPage />
      <Reservations />
    </div>
  )
}

export default Home
