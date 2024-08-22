import { FC } from 'react'
import { TSignCard } from './types'

export const SignCard: FC<TSignCard> = ({ children, description, title }) => {
  return (
    <div className={'flex h-fit w-full max-w-xl flex-col gap-5 text-center'}>
      <header className="flex flex-col gap-4 text-mercedes-blue-500">
        <h1 className={'text-3xl font-bold italic'}>{title}</h1>
        <p className={'text-sm'}>{description}</p>
      </header>
      <main>{children}</main>
    </div>
  )
}
