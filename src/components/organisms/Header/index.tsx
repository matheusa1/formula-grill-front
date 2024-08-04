'use client'

import Image from 'next/image'
import { FC } from 'react'
import Logo from '@/assets/svg/logo.svg'
import LogoNoText from '@/assets/svg/logoNoText.svg'
import { Button } from '@/components/atoms/Button'
import { HeaderItems } from '@/components/molecules/HeaderItems'
import { useWindow } from '@/hooks/useWindow'

export const Header: FC = () => {
  const { width } = useWindow()

  return (
    <header
      className={
        'flex flex-col bg-black items-center px-5 md:px-20 gap-5 xl:px-64 py-5 xl:gap-10 lg:px-40 lg:gap-5'
      }
    >
      <section className="flex items-center w-full justify-between max-w-7xl">
        {width >= 640 && (
          <Button.Root style={'outline'} size="sm">
            <Button.Text>Entrar</Button.Text>
          </Button.Root>
        )}

        <Image
          src={width >= 640 ? Logo : LogoNoText}
          alt={'Logo image'}
          className="h-10 sm:w-full"
        />
        <Button.Root size="sm">
          <Button.Text>Reservar</Button.Text>
        </Button.Root>
      </section>
      <HeaderItems />
    </header>
  )
}
