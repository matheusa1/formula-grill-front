'use client'

import ChefsAdminList from '@/components/organisms/ChefsAdminList'
import HeaderChefs from '@/components/organisms/HeaderChefs'
import { getChefs } from '@/services/api'
import { FC, useState } from 'react'
import ReactLoading from 'react-loading'
import { useQuery } from 'react-query'

const Chefs: FC = () => {
  const [search, setSearch] = useState('')

  const { data: chefsList, isLoading } = useQuery({
    queryKey: ['chefs'],
    queryFn: async () => {
      const res = await getChefs()

      return res
    },
  })

  const filteredChefs = chefsList?.filter((data) =>
    data.name.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <main className={'flex min-h-full flex-col items-center gap-4 pb-4'}>
      <HeaderChefs search={search} setSearch={setSearch} />
      {isLoading ? (
        <ReactLoading
          className="self-center"
          width={36}
          type="spin"
          color="black"
        />
      ) : (
        <ChefsAdminList data={filteredChefs ? filteredChefs : []} />
      )}
    </main>
  )
}

export default Chefs
