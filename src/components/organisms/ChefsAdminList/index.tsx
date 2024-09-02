import { FC } from 'react'
import { TChefsAdminList } from './types'
import ChefAdminCard from '@/components/molecules/ChefAdminCard'

const ChefsAdminList: FC<TChefsAdminList> = ({ data }) => {
  return (
    <div
      className={
        ' grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 xl:gap-10'
      }
    >
      {data.map((chef) => (
        <ChefAdminCard key={chef.id} chefsInfo={chef} />
      ))}
    </div>
  )
}

export default ChefsAdminList
