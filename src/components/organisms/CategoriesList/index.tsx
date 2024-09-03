import { FC } from 'react'
import { TCategoriesList } from './types'
import Image from 'next/image'

const CategoriesList: FC<TCategoriesList> = ({ data }) => {
  return (
    <div className={'flex flex-col gap-4'}>
      <h1 className="text-xl font-bold">{data.name}</h1>
      <main
        className="
        grid
        grid-cols-1
        gap-5
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        2xl:grid-cols-5
      "
      >
        {data.dishes.map((dish) => (
          <div key={dish.id} className={'flex w-full gap-5'}>
            <Image
              src={dish.image}
              alt={dish.name}
              width={100}
              height={100}
              className={'size-20 rounded-md object-cover'}
            />
            <div className={'flex w-full flex-col gap-2 truncate'}>
              <h2 className={'truncate text-lg font-bold'}>{dish.name}</h2>
              <p>{dish.description}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}

export default CategoriesList
