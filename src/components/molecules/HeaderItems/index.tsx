'use client'

import { FC, useState } from 'react'

import { routes } from '@/routes/route'
import { HeaderItem } from '@/components/atoms/HeaderItem'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/atoms/Button'
import { useWindow } from '@/hooks/useWindow'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'

export const HeaderItems: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { width } = useWindow()
  const { user, isAdmin } = useAuth()
  const router = useRouter()

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleRedirectToLoginPage = () => {
    router.push('/login')
  }

  const handleRedirectToProfilePage = () => {
    router.push('/profile')
  }

  const handleRedirectToAdminPage = () => {
    router.push('/admin/tables')
  }

  return (
    <div className={'flex w-full max-w-7xl flex-col items-center'}>
      <div
        className={`flex flex-col items-center gap-5 overflow-hidden transition-all sm:h-fit sm:w-full sm:flex-row sm:justify-between ${isOpen ? 'h-72' : 'h-0'}`}
      >
        {routes.map((route, index) => (
          <HeaderItem key={index} path={route.path}>
            {route.name.toUpperCase()}
          </HeaderItem>
        ))}
        {width < 640 && (
          <Button.Root
            style={'outline'}
            size="sm"
            onClick={
              user
                ? isAdmin
                  ? handleRedirectToAdminPage
                  : handleRedirectToProfilePage
                : handleRedirectToLoginPage
            }
          >
            <Button.Text>
              {user ? (isAdmin ? 'ADMIN' : 'Perfil') : 'Entrar'}
            </Button.Text>
          </Button.Root>
        )}
      </div>
      <div className="sm:hidden">
        <Button.Root size="icon" onClick={toggleOpen} style="outline">
          <ChevronDown
            className={`size-6 transition-all duration-500 ${isOpen ? 'rotate-180' : ''}`}
          />
        </Button.Root>
      </div>
    </div>
  )
}
