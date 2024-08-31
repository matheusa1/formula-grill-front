import ChefsList from '@/components/organisms/ChefsList'
import { FC } from 'react'

const Chefs: FC = () => {
  return (
    <div
      className={
        ' flex min-h-screen flex-col items-center justify-center md:gap-12'
      }
      id="chefs"
    >
      <header className="text-center">
        <h1
          className={
            'p-5 text-center text-xl font-semibold text-white md:text-2xl'
          }
        >
          Chefs
        </h1>
        <span
          className={
            'p-5 text-center text-xl font-semibold text-white md:text-2xl'
          }
        >
          São eles quem calibram cada prato para alcançar o desempenho perfeito
        </span>
      </header>
      <ChefsList />
    </div>
  )
}

export default Chefs
