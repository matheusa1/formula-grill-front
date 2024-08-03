import { FC } from 'react'

import { routes } from '@/routes/route'
import { HeaderItem } from '@/components/atoms/HeaderItem'

export const HeaderItems: FC = () => {
  return (
    <div className={'flex w-full justify-between max-w-7xl'}>
      {routes.map((route) => (
        <HeaderItem path={route.path}>{route.name.toUpperCase()}</HeaderItem>
      ))}
    </div>
  )
}
