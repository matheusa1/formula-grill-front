import { FC } from 'react'
import {
  createDishesSchama,
  TCreateDishesForm,
  TCreateDishesSchemaInput,
  TCreateDishesSchemaOutput,
} from './types'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/components/atoms/Form'
import { Button } from '@/components/atoms/Button'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { createDishes, getCategories } from '@/services/api'
import { useAuth } from '@/context/AuthContext'
import { TCategoriesResponse } from '@/types/categoriesTypes'
import { TAxiosErrorApi } from '@/types/error'
import { toast } from 'react-toastify'

const CreateDishesForm: FC<TCreateDishesForm> = ({ closeModal }) => {
  const formMethods = useForm<TCreateDishesSchemaInput>({
    resolver: zodResolver(createDishesSchama),
  })

  const queryClient = useQueryClient()

  const { token } = useAuth()

  const isUpdate = false

  const { data: categories } = useQuery({
    queryKey: 'categories',
    queryFn: async () => {
      const res = await getCategories(token!)
        .then((data) =>
          data.map((category) => {
            return {
              label: category.name,
              value: category.id,
            }
          }),
        )
        .catch(() => [] as TCategoriesResponse[])

      return res
    },
  })

  const { mutateAsync: createDishesFn } = useMutation({
    mutationKey: 'createDishes',
    mutationFn: createDishes,

    onSuccess: (data) => {
      formMethods.reset()
      toast.success('Prato cadastrado com sucesso')
      const cacheData = queryClient.getQueryData('dishes')

      console.log({ cacheData })

      queryClient.setQueryData(['dishes'], () => {
        return [
          ...(cacheData as []),
          {
            ...data,
          },
        ]
      })

      closeModal()
    },

    onError: (err) => {
      const typedErr = err as TAxiosErrorApi

      if (typedErr.response?.data.statusCode === 409) {
        formMethods.setError('name', {
          type: 'manual',
          message: 'Prato já cadastrado',
        })
      }

      toast.error(typedErr.response?.data.message)
    },
  })

  const onHandleCreate = (data: unknown) => {
    const typedData = data as TCreateDishesSchemaOutput

    createDishesFn({ data: typedData, token: token! })
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

        <Form.Input.Root>
          <Form.Input.Label className="text-black">Descrição</Form.Input.Label>
          <Form.TextArea.Main
            name="description"
            type="number"
            variant={'primaryBlueDarkText'}
          />
          <Form.Input.Feedback>
            {formMethods.formState.errors.description?.message}
          </Form.Input.Feedback>
        </Form.Input.Root>

        <Form.Input.Root>
          <Form.Input.Label className="text-black">
            URL da imagem
          </Form.Input.Label>
          <Form.Input.Main name="image" style={'primaryBlueDarkText'} />
          <Form.Input.Feedback className="col-span-2">
            {formMethods.formState.errors.image?.message}
          </Form.Input.Feedback>
        </Form.Input.Root>

        <Form.Input.Root>
          <Form.Input.Label className="text-black">Categoria</Form.Input.Label>
          <Form.Select.Main
            name="category"
            variant="white"
            options={categories}
            isClearable
          />
          <Form.Input.Feedback className="col-span-2">
            {formMethods.formState.errors.category?.message}
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

export default CreateDishesForm
