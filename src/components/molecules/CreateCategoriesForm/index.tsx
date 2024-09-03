import { FC } from 'react'
import {
  TCreateCategoriesForm,
  TCreateCategoriesSchemaInput,
  TCreateCategoriesSchemaOutput,
  createCategoriesSchama,
} from './types'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/components/atoms/Form'
import { Button } from '@/components/atoms/Button'
import { useMutation } from 'react-query'
import { useAuth } from '@/context/AuthContext'
import { TAxiosErrorApi } from '@/types/error'
import { toast } from 'react-toastify'
import { createCategories } from '@/services/api'

const CreateCategoriesForm: FC<TCreateCategoriesForm> = ({ closeModal }) => {
  const formMethods = useForm<TCreateCategoriesSchemaInput>({
    resolver: zodResolver(createCategoriesSchama),
  })

  const { token } = useAuth()

  const isUpdate = false

  const { mutateAsync: createCategoriesFn } = useMutation({
    mutationKey: 'createCategories',
    mutationFn: createCategories,

    onSuccess: () => {
      formMethods.reset()
      toast.success('Categoria cadastrada com sucesso')

      closeModal()
    },

    onError: (err) => {
      const typedErr = err as TAxiosErrorApi

      if (typedErr.response?.data.statusCode === 409) {
        formMethods.setError('name', {
          type: 'manual',
          message: 'Categoria já cadastrada',
        })
      }

      toast.error(typedErr.response?.data.message)
    },
  })

  const onHandleCreate = (data: unknown) => {
    const typedData = data as TCreateCategoriesSchemaOutput

    createCategoriesFn({ data: typedData, token: token! })
  }

  return (
    <FormProvider {...formMethods}>
      <form
        className="grid w-full grid-cols-1 gap-4"
        onSubmit={formMethods.handleSubmit(onHandleCreate)}
      >
        <Form.Input.Root>
          <Form.Input.Label className="text-black">Nome</Form.Input.Label>
          <Form.Input.Main name="name" style={'primaryBlueDarkText'} />
          <Form.Input.Feedback>
            {formMethods.formState.errors.name?.message}
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
            <Button.Text>{isUpdate ? 'Atualizar' : 'Criar'}</Button.Text>
          </Button.Root>
        </footer>
      </form>
    </FormProvider>
  )
}

export default CreateCategoriesForm
