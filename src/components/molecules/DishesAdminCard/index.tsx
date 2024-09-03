'use client'

import { FC, useState } from 'react'
import { TDishesAdminCard } from './types'
import Image from 'next/image'
import { Pencil, X } from 'lucide-react'
import * as Dialog from '@radix-ui/react-dialog'
import CreateDishesForm from '../CreateDishesForm'

const DishesAdminCard: FC<TDishesAdminCard> = ({ dishesInfo }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={
        'grid max-h-40 w-full grid-cols-3 gap-4 overflow-hidden rounded-md p-4 shadow-lg'
      }
    >
      <Image
        alt={`Dishes ${dishesInfo.name} image`}
        width={1920}
        height={1080}
        src={dishesInfo.image}
        className="col-span-1 aspect-square w-full max-w-32 object-cover"
      />
      <div className="col-span-2 flex w-full flex-col justify-between">
        <header className="flex justify-between">
          <strong className="truncate">{dishesInfo.name}</strong>
          <Dialog.Root open={isOpen}>
            <Dialog.Trigger asChild>
              <Pencil className="size-5" onClick={() => setIsOpen(true)} />
            </Dialog.Trigger>
            <Dialog.Overlay
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-10 bg-black/50"
            />
            <Dialog.Content className="fixed left-1/2 top-1/2 z-20 flex w-5/6 max-w-screen-sm -translate-x-1/2 -translate-y-1/2 flex-col gap-2 rounded-lg bg-white p-5 shadow-lg">
              <header className="flex items-center justify-between">
                <Dialog.Title className="text-lg font-bold">
                  Atualizar
                </Dialog.Title>
                <Dialog.Close onClick={() => setIsOpen(false)}>
                  <X />
                </Dialog.Close>
              </header>
              <Dialog.Description className="text-xs">
                Preencha os campos abaixo para atualizar um prato
              </Dialog.Description>
              <CreateDishesForm
                closeModal={() => setIsOpen(false)}
                data={dishesInfo}
              />
            </Dialog.Content>
          </Dialog.Root>
        </header>
        <p className="flex w-full gap-2 text-ellipsis whitespace-nowrap">
          <strong>Categoria:</strong>
          {dishesInfo.categoryId}
        </p>

        <p className="flex w-full gap-2 text-ellipsis whitespace-nowrap">
          <strong>Descrição:</strong>
          {dishesInfo.description} anos
        </p>
      </div>
    </div>
  )
}

export default DishesAdminCard
