import Image from 'next/image'
import { FC, ReactNode } from 'react'
import SignImage from '@/assets/images/sign_image.png'

const AuthLayout: FC<{
  children: ReactNode
}> = ({ children }) => {
  return (
    <main
      className={
        'grid min-h-screen w-screen grid-cols-1 place-items-center bg-black bg-carbon p-5 text-white brightness-150 md:px-20 xl:grid-cols-2 xl:gap-20'
      }
    >
      {children}
      <Image
        src={SignImage}
        alt="Imagem de um carro"
        className={'hidden w-full max-w-xl rounded-md object-cover xl:flex'}
      />
    </main>
  )
}

export default AuthLayout
