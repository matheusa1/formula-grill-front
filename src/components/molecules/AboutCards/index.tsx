import { FC } from 'react'
import { TAboutCards } from './types'

const AboutCards: FC<TAboutCards> = ({ Icon, info, title, subInfo }) => {
  return (
    <div className={'flex w-fit flex-col gap-2 text-center text-white'}>
      <header className="flex gap-2 text-lg font-bold">
        <Icon />
        <h1>{title}</h1>
      </header>
      <div className="grid grid-cols-1 gap-1">
        <span>{info}</span>
        <span>{subInfo}</span>
      </div>
    </div>
  )
}

export default AboutCards
