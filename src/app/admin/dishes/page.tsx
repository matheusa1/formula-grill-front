'use client'

import BodyDishes from '@/components/organisms/BodyDishes'
import HeaderDishes from '@/components/organisms/HeaderDishes'
import { useAuth } from '@/context/AuthContext'
import { getAllDishes } from '@/services/api'
import { TDishesResponse } from '@/types/dishesTypes'
import { FC, useState } from 'react'
import { useQuery } from 'react-query'

const Dishes: FC = () => {
  const [search, setSearch] = useState('')
  const { token } = useAuth()

  const { data: dishes } = useQuery({
    queryKey: 'dishes',
    queryFn: async () => {
      const res = await getAllDishes(token!)
        .then((res) => res)
        .catch(() => [] as TDishesResponse[])

      return res
    },
  })

  return (
    <div className={''}>
      <HeaderDishes search={search} setSearch={setSearch} />
      <BodyDishes data={dishes ? dishes : []} />
    </div>
  )
}

export default Dishes
