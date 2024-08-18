'use client'

import { Button } from '@/components/atoms/Button'
import { Form } from '@/components/atoms/Form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { SignUpScheme, TSignUpScheme } from './types'
import { useRouter } from 'next/navigation'
import { createUser } from '@/services/api'
import { toast } from 'react-toastify'

export const SignUpForm: FC = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const formMethods = useForm<TSignUpScheme>({
    resolver: zodResolver(SignUpScheme),
  })

  const onHandleSubmit = async (data: TSignUpScheme) => {
    setIsLoading(true)

    try {
      await createUser(data)

      toast.success('Usuário cadastrado com sucesso!')

      setIsLoading(false)

      router.push('/login')
      // eslint-disable-next-line
    } catch (error: any) {
      if (error?.response?.status === 409) {
        formMethods.setError('email', {
          type: 'manual',
          message: 'Email já cadastrado',
        })

        setIsLoading(false)

        return
      }
    }
  }

  const onHandleGoBack = () => {
    router.back()
  }

  return (
    <FormProvider {...formMethods}>
      <form
        className={'flex flex-col gap-10'}
        onSubmit={formMethods.handleSubmit(onHandleSubmit)}
      >
        <div className="flex flex-col gap-4">
          <Form.Input.Root>
            <Form.Input.Label
              htmlFor="name"
              className=" text-center xl:text-left"
            >
              Nome
            </Form.Input.Label>
            <Form.Input.Main id="name" style="primaryBlue" name="name" />
            <Form.Input.Feedback type="error">
              {formMethods.formState.errors.name?.message}
            </Form.Input.Feedback>
          </Form.Input.Root>
          <Form.Input.Root>
            <Form.Input.Label
              htmlFor="email"
              className="text-center xl:text-left"
            >
              Email
            </Form.Input.Label>
            <Form.Input.Main
              type="email"
              id="email"
              style="primaryBlue"
              name="email"
            />
            <Form.Input.Feedback type="error">
              {formMethods.formState.errors.email?.message}
            </Form.Input.Feedback>
          </Form.Input.Root>
          <Form.Input.Root>
            <Form.Input.Label
              htmlFor="password"
              className="text-center xl:text-left"
            >
              Senha
            </Form.Input.Label>
            <Form.Input.Main
              id="password"
              password
              style="primaryBlue"
              name="password"
            />
            <Form.Input.Feedback type="error">
              {formMethods.formState.errors.password?.message}
            </Form.Input.Feedback>
          </Form.Input.Root>
          <Form.Input.Root>
            <Form.Input.Label
              htmlFor="confirmPassword"
              className="text-center xl:text-left"
            >
              Confirmar Senha
            </Form.Input.Label>
            <Form.Input.Main
              id="confirmPassword"
              style="primaryBlue"
              password
              name="confirmPassword"
            />
            <Form.Input.Feedback type="error">
              {formMethods.formState.errors.confirmPassword?.message}
            </Form.Input.Feedback>
          </Form.Input.Root>
          <p className="text-sm xl:text-left">
            Já possui uma conta?{' '}
            <a
              className=" text-mercedes-blue-500 underline 
            "
              href="/login"
            >
              Entrar
            </a>
          </p>
        </div>

        <footer className="flex flex-col gap-4 xl:flex-row xl:gap-20 ">
          <Button.Root
            isLoading={isLoading}
            type="button"
            style="outlineBlue"
            className="w-full"
            onClick={!isLoading ? onHandleGoBack : () => {}}
          >
            <Button.Text>Voltar</Button.Text>
          </Button.Root>
          <Button.Root
            isLoading={isLoading}
            style="primaryBlue"
            type={!isLoading ? 'submit' : 'button'}
            className="w-full"
          >
            <Button.Text>Entrar</Button.Text>
          </Button.Root>
        </footer>
      </form>
    </FormProvider>
  )
}
