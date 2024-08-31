import { FC } from 'react'
import { TChefCard } from './types'
import Image from 'next/image'

const ChefCard: FC<TChefCard> = ({ image, name }) => {
  return (
    <div
      className={
        'flex max-w-xs flex-col items-center gap-2 font-semibold text-white transition-all hover:scale-105'
      }
    >
      <Image src={image} alt={`${name} image`} />
      <h1>{name}</h1>
    </div>
  )
}

export default ChefCard
