'use client'

import CategoriesList from '@/components/organisms/CategoriesList'
import { useAuth } from '@/context/AuthContext'
import { getCategories } from '@/services/api'
import { TCategoriesResponse } from '@/types/categoriesTypes'
import { FC } from 'react'
import { useQuery } from 'react-query'

const Dishes: FC = () => {
  const { token } = useAuth()

  const { data: categoriesList } = useQuery({
    queryKey: 'dishes',
    queryFn: async () => {
      const response = await getCategories(token!)
        .then((res) => res)
        .catch(() => [] as TCategoriesResponse[])

      return response
    },
  })

  return (
    <div
      className={'flex w-full flex-col gap-5 p-4 text-white md:px-10 lg:px-40'}
    >
      <header className="flex flex-col gap-5 text-center text-xl font-bold md:text-2xl">
        <h1>Cardápio</h1>
        <p>Do grid de largada ao último garfo, uma experiência única.</p>
      </header>

      <main className="flex flex-col gap-10">
        {categoriesList?.map((category) => (
          <CategoriesList key={category.id} data={category} />
        ))}
      </main>
    </div>
  )
}

export default Dishes
