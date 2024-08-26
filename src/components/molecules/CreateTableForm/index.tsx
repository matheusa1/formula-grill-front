import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import {
  createTableSchama,
  TCreateTableForm,
  TCreateTableSchamaInput,
  TCreateTableSchamaOutput,
} from './types'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/components/atoms/Form'
import { Button } from '@/components/atoms/Button'
import { createTable } from '@/services/api'
import { useAuth } from '@/context/AuthContext'
import { toast } from 'react-toastify'
import { useMutation, useQueryClient } from 'react-query'
import { TAxiosErrorApi } from '@/types/error'

const CreateTableForm: FC<TCreateTableForm> = ({ closeModal }) => {
  const queryClient = useQueryClient()

  const { token } = useAuth()

  const formMethods = useForm<TCreateTableSchamaInput>({
    resolver: zodResolver(createTableSchama),
    defaultValues: {
      status: true,
    },
  })

  const { mutateAsync: createTableFn } = useMutation({
    mutationFn: createTable,
    onSuccess: (data, variables) => {
      const cacheData = queryClient.getQueryData('tables')

      queryClient.setQueryData(['tables'], (old) => {
        return [
          ...(old as []),
          {
            id: data.id,
            code: variables.data.code,
            status: variables.data.status,
            seats: variables.data.seats,
          },
        ]
      })

      console.log({ data })
      console.log({ cacheData })

      toast.success('Mesa criada com sucesso')

      formMethods.reset()
      closeModal()
    },
    onError: (err) => {
      const typedErr = err as TAxiosErrorApi

      if (typedErr.response?.data.statusCode === 409) {
        formMethods.setError('code', {
          type: 'manual',
          message: 'Código já está em uso',
        })
      }
      toast.error('Erro ao criar mesa')
    },
  })

  const onHandleCreate = async (data: unknown) => {
    const typedData = data as TCreateTableSchamaOutput

    await createTableFn({ data: typedData, token: token! })
  }

  return (
    <FormProvider {...formMethods}>
      <form
        className="grid w-full grid-cols-1 gap-4"
        onSubmit={formMethods.handleSubmit(onHandleCreate)}
      >
        <Form.Input.Root>
          <Form.Input.Label className="text-black">Código</Form.Input.Label>
          <Form.Input.Main name="code" style={'primaryBlueDarkText'} />
          <Form.Input.Feedback>
            {formMethods.formState.errors.code?.message}
          </Form.Input.Feedback>
        </Form.Input.Root>

        <Form.Input.Root>
          <Form.Input.Label className="text-black">
            Quantidade de assentos
          </Form.Input.Label>
          <Form.Input.Main
            name="seats"
            type="number"
            style={'primaryBlueDarkText'}
          />
          <Form.Input.Feedback>
            {formMethods.formState.errors.seats?.message}
          </Form.Input.Feedback>
        </Form.Input.Root>

        <Form.Input.Root className="grid w-full grid-cols-2">
          <Form.Input.Label className="text-black">
            Disponibilidade
          </Form.Input.Label>
          <Form.Switch.Main name="status" className="place-self-end" />
          <Form.Input.Feedback className="col-span-2">
            {formMethods.formState.errors.status?.message}
          </Form.Input.Feedback>
        </Form.Input.Root>

        <footer className="grid grid-cols-1 gap-4 md:flex md:justify-end">
          <Button.Root
            type="button"
            className="w-full md:max-w-40"
            style="outlineBlue"
            onClick={() => closeModal()}
          >
            <Button.Text>Cancelar</Button.Text>
          </Button.Root>

          <Button.Root
            type="submit"
            className="w-full md:max-w-40"
            style="primaryBlue"
          >
            <Button.Text>Criar</Button.Text>
          </Button.Root>
        </footer>
      </form>
    </FormProvider>
  )
}

export default CreateTableForm
