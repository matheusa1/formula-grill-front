'use client'

import Image from 'next/image'
import { FC } from 'react'
import Logo from '@/assets/svg/logo.svg'
import LogoNoText from '@/assets/svg/logoNoText.svg'
import { Button } from '@/components/atoms/Button'
import { HeaderItems } from '@/components/molecules/HeaderItems'
import { useWindow } from '@/hooks/useWindow'
import { useRouter } from 'next/navigation'

export const Header: FC = () => {
  const { width } = useWindow()
  const router = useRouter()
  const handleRedirectToLoginPage = () => {
    router.push('/login')
  }

  return (
    <header
      className={
        'flex flex-col items-center gap-5 bg-black p-5 md:px-20 lg:gap-5 lg:px-40 xl:gap-10 xl:px-64'
      }
    >
      <section className="flex w-full max-w-7xl items-center justify-between">
        {width >= 640 && (
          <Button.Root
            style={'outline'}
            size="sm"
            onClick={handleRedirectToLoginPage}
          >
            <Button.Text>Entrar</Button.Text>
          </Button.Root>
        )}

        <Image
          src={width >= 640 ? Logo : LogoNoText}
          alt={'Logo image'}
          className="h-10 w-1/3 min-w-fit object-contain object-left sm:w-full sm:object-center"
        />
        <Button.Root size="sm">
          <Button.Text>Reservar</Button.Text>
        </Button.Root>
      </section>
      <HeaderItems />
    </header>
  )
}
