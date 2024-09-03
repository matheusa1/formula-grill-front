import { FC } from 'react'
import { TBodyDishes } from './types'
import DishesAdminCard from '@/components/molecules/DishesAdminCard'

const BodyDishes: FC<TBodyDishes> = ({ data }) => {
  return (
    <div className={'grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3'}>
      {data.map((prato, index) => (
        <DishesAdminCard key={index} dishesInfo={prato} />
      ))}
    </div>
  )
}

export default BodyDishes
