import { SignUpForm } from '@/components/molecules/SignUpForm'
import { SignCard } from '@/components/organisms/SignCard'
import { FC } from 'react'

const SignUp: FC = () => {
  return (
    <SignCard
      description="Para se cadastrar, insira seu nome e o email e senha desejados."
      title="CADASTRO"
    >
      <SignUpForm />  
    </SignCard>
  )
}

export default SignUp
