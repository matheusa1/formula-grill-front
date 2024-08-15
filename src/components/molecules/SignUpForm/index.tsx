'use client'

import { Button } from '@/components/atoms/Button'
import { Form } from '@/components/atoms/Form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { SignUpScheme, TSignUpScheme } from './types'
import { useRouter } from 'next/navigation'

export const SignUpForm: FC = () => {
  const router = useRouter()

  const formMethods = useForm<TSignUpScheme>({
    resolver: zodResolver(SignUpScheme),
  })

  const onHandleSubmit = (data: TSignUpScheme) => {
    console.log(data)
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
              className="text-center xl:text-left"
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
            type="button"
            style="outlineBlue"
            className="w-full"
            onClick={onHandleGoBack}
          >
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
