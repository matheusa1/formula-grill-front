import { Button } from '@/components/atoms/Button'
import { Input } from '@/components/atoms/Input'
import { FC, useState } from 'react'
import { THeaderTables } from './types'
import * as Dialog from '@radix-ui/react-dialog'
import CreateTableForm from '@/components/molecules/CreateTableForm'
import { X } from 'lucide-react'

const HeaderTables: FC<THeaderTables> = ({ search, setSearch }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className={'flex w-full flex-col gap-2 md:grid md:grid-cols-3'}>
      <Input.Root className="md:place-self-start">
        <Input.Main
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          search
          style="primaryBlueDarkText"
        />
      </Input.Root>
      <h1 className="hidden md:flex md:place-self-center">HeaderTables</h1>
      <Dialog.Root open={isOpen}>
        <Button.Root
          className="w-full md:w-fit md:place-self-end"
          style="primaryBlue"
          onClick={() => setIsOpen(true)}
        >
          <Button.Text>Criar</Button.Text>
        </Button.Root>
        <Dialog.Overlay
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-10 bg-black/50"
        />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-20 flex w-5/6 max-w-screen-sm -translate-x-1/2 -translate-y-1/2 flex-col gap-2 rounded-lg bg-white p-5 shadow-lg">
          <header className="flex items-center justify-between">
            <Dialog.Title className="text-lg font-bold">Criar</Dialog.Title>
            <Dialog.Close onClick={() => setIsOpen(false)}>
              <X />
            </Dialog.Close>
          </header>
          <Dialog.Description className="text-xs">
            Preencha os campos abaixo para criar uma nova mesa
          </Dialog.Description>
          <CreateTableForm closeModal={() => setIsOpen(false)} />
        </Dialog.Content>
      </Dialog.Root>
    </header>
  )
}

export default HeaderTables
