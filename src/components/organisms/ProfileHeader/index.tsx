'use client'

import { Button } from '@/components/atoms/Button'
import { ButtonText } from '@/components/atoms/Button/parts/ButtonText'
import { useAuth } from '@/context/AuthContext'
import { useWindow } from '@/hooks/useWindow'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FC } from 'react'

const ProfileHeader: FC = () => {
  const { user, signOut } = useAuth()
  const { width } = useWindow()
  const router = useRouter()

  const onHandleSignOut = () => {
    signOut()
    router.push('/')
  }

  return (
    <div className={'grid grid-cols-3 text-xl font-bold'}>
      <h1 className="my-auto place-self-start">Perfil</h1>
      <h1 className="place-self-center">{user?.name}</h1>
      <Button.Root
        size={width >= 1250 ? 'md' : 'sm'}
        className="flex items-center gap-2 place-self-end"
        onClick={onHandleSignOut}
      >
        {width >= 1250 && <ButtonText>Sair</ButtonText>}
        <LogOut />
      </Button.Root>
    </div>
  )
}

export default ProfileHeader
