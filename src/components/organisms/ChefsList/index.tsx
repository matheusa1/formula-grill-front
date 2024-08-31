import { ChefsData } from '@/app/mock/chefs'
import ChefCard from '@/components/molecules/ChefCard'
import { FC } from 'react'

const ChefsList: FC = () => {
  const chefs = ChefsData

  return (
    <div
      className={
        'grid grid-cols-1 place-items-center gap-5 p-5 md:grid-cols-2 lg:grid-cols-4'
      }
    >
      {chefs.map((chef, index) => (
        <ChefCard key={index} image={chef.image} name={chef.name} />
      ))}
    </div>
  )
}

export default ChefsList
