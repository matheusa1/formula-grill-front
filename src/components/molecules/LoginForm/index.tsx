'use client'

import { Button } from '@/components/atoms/Button'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { TSignInScheme, SignInScheme } from './types'
import { Form } from '@/components/atoms/Form'
import { useRouter } from 'next/navigation'
import { login } from '@/services/api'

export const LoginForm: FC = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const formMethods = useForm<TSignInScheme>({
    resolver: zodResolver(SignInScheme),
  })

  const onHandleSubmit = async (data: TSignInScheme) => {
    setIsLoading(true)

    try {
      const response = await login(data)

      console.log(response)

      setIsLoading(false)
      // eslint-disable-next-line
    } catch (error: any) {
      if (error?.response?.data?.statusCode === 401) {
        formMethods.setError('email', {
          type: 'manual',
          message: 'Usuário ou senha inválidos',
        })

        formMethods.setError('password', {
          type: 'manual',
          message: 'Usuário ou senha inválidos',
        })

        setIsLoading(false)
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
          <a
            className="text-sm text-mercedes-blue-500 underline xl:text-left
            "
            href="/sign-up"
          >
            Cadastre-se
          </a>
        </div>

        <footer className="flex flex-col gap-4 xl:flex-row xl:gap-20 ">
          <Button.Root
            isLoading={isLoading}
            onClick={onHandleGoBack}
            type="button"
            style="outlineBlue"
            className="w-full"
          >
            <Button.Text>Voltar</Button.Text>
          </Button.Root>
          <Button.Root
            isLoading={isLoading}
            style="primaryBlue"
            type="submit"
            className="w-full"
          >
            <Button.Text>Entrar</Button.Text>
          </Button.Root>
        </footer>
      </form>
    </FormProvider>
  )
}
