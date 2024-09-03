import { FC } from 'react'
import { TBodyDishes } from './types'

const BodyDishes: FC<TBodyDishes> = ({ data }) => {
  return (
    <div className={'flex flex-col gap-3'}>
      {data.map((prato, index) => (
        <p key={index}>{prato.name}</p>
      ))}
    </div>
  )
}

export default BodyDishes
