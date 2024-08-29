'use client'

import Image from 'next/image'
import { FC } from 'react'

import HomeImage from '@/assets/images/homeImage.png'
import { Button } from '@/components/atoms/Button'
import { useWindow } from '@/hooks/useWindow'
import { onHandleScrollToReservation } from '@/utils/onHandleScrollToReservation'

const InitialPage: FC = () => {
  const { width } = useWindow()

  return (
    <section
      id="home"
      className={
        'relative h-screen overflow-hidden bg-black bg-carbon px-5 brightness-100 lg:grid lg:grid-cols-2'
      }
    >
      <div className="z-10 flex flex-col items-center gap-8 pt-5 text-center lg:items-start lg:place-self-center lg:text-start">
        <div className="flex flex-col gap-4 text-white">
          <h1 className="text-xl font-bold lg:text-2xl xl:text-3xl">
            {'Bem vindo ao Formula Grill'.toLocaleUpperCase()}
          </h1>
          <p className="xl:text-lg">
            {'Onde a volta ao mundo em sabores é uma experiência fora da curva'}
          </p>
        </div>
        <Button.Root
          onClick={onHandleScrollToReservation}
          size={width >= 1024 ? 'lg' : 'sm'}
        >
          <Button.Text>Faça sua reserva</Button.Text>
        </Button.Root>
      </div>
      <Image
        className="absolute bottom-0 left-1/2 -z-10 h-4/5 w-11/12 max-w-96 -translate-x-1/2 place-self-end rounded-t-full object-cover brightness-75 lg:static lg:mx-auto lg:h-full lg:max-w-none lg:translate-x-0 lg:px-5"
        src={HomeImage}
        alt={'Home Image'}
      />
    </section>
  )
}

export default InitialPage
