import Image from 'next/image'
import { FC } from 'react'
import Logo from '@/assets/svg/logo.svg'
import { Button } from '@/components/atoms/Button'
import { HeaderItems } from '@/components/molecules/HeaderItems'

export const Header: FC = () => {
  return (
    <header className={'flex flex-col bg-black items-center px-64 py-5 gap-10'}>
      <section className="flex items-center w-full justify-between max-w-7xl">
        <Button.Root style={'outline'} size="sm">
          <Button.Text>Entrar</Button.Text>
        </Button.Root>
        <Image src={Logo} alt={'Logo image'} />
        <Button.Root size="sm">
          <Button.Text>Reservar</Button.Text>
        </Button.Root>
      </section>
      <HeaderItems />
    </header>
  )
}
