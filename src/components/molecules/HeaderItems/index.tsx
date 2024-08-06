'use client'

import { FC, useState } from 'react'

import { routes } from '@/routes/route'
import { HeaderItem } from '@/components/atoms/HeaderItem'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/atoms/Button'
import { useWindow } from '@/hooks/useWindow'

export const HeaderItems: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { width } = useWindow()

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={'flex max-w-7xl w-full items-center flex-col'}>
      <div
        className={`flex sm:h-fit sm:justify-between sm:flex-row sm:w-full flex-col gap-5 items-center overflow-hidden transition-all ${isOpen ? 'h-72' : 'h-0'}`}
      >
        {routes.map((route, index) => (
          <HeaderItem key={index} path={route.path}>
            {route.name.toUpperCase()}
          </HeaderItem>
        ))}
        {width < 640 && (
          <Button.Root style={'outline'} size="sm">
            <Button.Text>Entrar</Button.Text>
          </Button.Root>
        )}
      </div>
      <div className="sm:hidden">
        <Button.Root size="icon" onClick={toggleOpen} style="outline">
          <ChevronDown
            className={`h-6 w-6 transition-all duration-500 ${isOpen ? 'rotate-180' : ''}`}
          />
        </Button.Root>
      </div>
    </div>
  )
}
