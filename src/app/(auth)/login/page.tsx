import { FC } from 'react'
import { LoginForm } from '@/components/molecules/LoginForm'
import { SignCard } from '@/components/organisms/SignCard'

const Login: FC = () => {
  return (
    <SignCard
      description="Para fazer login, insira seu email e senha cadastrados."
      title="LOGIN"
    >
      <LoginForm />
    </SignCard>
  )
}

export default Login
