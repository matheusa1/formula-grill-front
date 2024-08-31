'use client'

import HeaderChefs from '@/components/organisms/HeaderChefs'
import { FC, useState } from 'react'

const Chefs: FC = () => {
  const [search, setSearch] = useState('')

  return (
    <main className={'flex min-h-full flex-col items-center gap-4 pb-4'}>
      <HeaderChefs search={search} setSearch={setSearch} />
      <a>a</a>
    </main>
  )
}

export default Chefs
