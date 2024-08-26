'use client'

import BodyTables from '@/components/organisms/BodyTables'
import HeaderTables from '@/components/organisms/HeaderTables'
import { getTables } from '@/services/api'
import { FC, useState } from 'react'
import { useQuery } from 'react-query'

const Tables: FC = () => {
  const [search, setSearch] = useState('')

  const { data: tables, isLoading } = useQuery(['tables'], {
    queryFn: async () => {
      const res = await getTables()

      return res
    },
  })

  const filteredTables = tables?.filter(
    (data) =>
      data.code.toLowerCase().includes(search.toLowerCase()) ||
      data.seats.toString().toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <main className={'flex min-h-full flex-col items-center gap-4 pb-4'}>
      <HeaderTables search={search} setSearch={setSearch} />
      <BodyTables
        data={filteredTables ? filteredTables : []}
        loading={isLoading}
      />
    </main>
  )
}

export default Tables
