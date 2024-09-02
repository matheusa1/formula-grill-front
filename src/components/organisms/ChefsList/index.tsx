import ChefCard from '@/components/molecules/ChefCard'
import { getChefs } from '@/services/api'
import { TChefResponse } from '@/types/chefType'
import { FC } from 'react'

const getChefsData = async (): Promise<TChefResponse[]> => {
  const res = await getChefs()
    .then((response) => response.filter((chef, index) => index <= 4))
    .catch(() => [])

  return res
}

const ChefsList: FC = async () => {
  const chefs = await getChefsData()

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
