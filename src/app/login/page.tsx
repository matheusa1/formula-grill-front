import { SignCard } from '@/components/organisms/SignCard'
import { FC } from 'react'
import SignImage from '@/assets/images/sign_image.png'
import Image from 'next/image'
import { LoginForm } from '@/components/molecules/LoginForm'

const Login: FC = () => {
  return (
    <main
      className={
        'grid h-screen w-screen grid-cols-1 place-items-center bg-black bg-carbon p-5 text-white brightness-150 md:p-20 xl:grid-cols-2 xl:gap-20'
      }
    >
      <SignCard
        description="Para fazer login, insira seu email e senha cadastrados."
        title="LOGIN"
      >
        <LoginForm />
      </SignCard>
      <Image
        src={SignImage}
        alt="Imagem de um carro"
        className={'hidden w-full max-w-xl rounded-md object-cover xl:flex'}
      />
    </main>
  )
}

export default Login
