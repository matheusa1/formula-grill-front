'use client'

import { Button } from '@/components/atoms/Button'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ISignInScheme, SignInScheme } from './types'
import { Form } from '@/components/atoms/Form'

export const LoginForm: FC = () => {
  const formMethods = useForm<ISignInScheme>({
    resolver: zodResolver(SignInScheme),
  })

  const onHandleSubmit = (data: ISignInScheme) => {
    console.log(data)
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
            className="text-sm text-mercedes-blue-500 underline xl:text-left"
            href="/sign-up"
          >
            Cadastre-se
          </a>
        </div>

        <footer className="flex flex-col gap-4 xl:flex-row xl:gap-20 ">
          <Button.Root type="button" style="outlineBlue" className="w-full">
            <Button.Text>Voltar</Button.Text>
          </Button.Root>
          <Button.Root style="primaryBlue" type="submit" className="w-full">
            <Button.Text>Entrar</Button.Text>
          </Button.Root>
        </footer>
      </form>
    </FormProvider>
  )
}
