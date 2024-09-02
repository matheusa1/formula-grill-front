import { FC } from 'react'

import { useAuth } from '@/context/AuthContext'
import { FormProvider, useForm } from 'react-hook-form'
import {
  createChefSchama,
  TCreateChefForm,
  TCreateChefInput,
  TCreateChefOutput,
} from './types'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/components/atoms/Form'
import { Button } from '@/components/atoms/Button'
import { createChef, updateChef } from '@/services/api'
import { toast } from 'react-toastify'
import { TAxiosErrorApi } from '@/types/error'
import { useMutation, useQueryClient } from 'react-query'
import { TChefResponse } from '@/types/chefType'

const CreateChefForm: FC<TCreateChefForm> = ({ closeModal, data }) => {
  const { token } = useAuth()
  const queryClient = useQueryClient()
  const isUpdate = !!data

  const formMethods = useForm<TCreateChefInput>({
    resolver: zodResolver(createChefSchama),
    defaultValues: {
      name: data?.name || '',
      bio: data?.bio || '',
      role: data?.role || '',
      image: data?.image || '',
      yearsOfExperience: data?.yearsOfExperience.toString() || '',
    },
  })

  const { mutateAsync: createChefFn } = useMutation({
    mutationFn: isUpdate ? updateChef : createChef,
    onSuccess: (data, variables) => {
      const cacheData = queryClient.getQueryData('chefs')

      if (!isUpdate) {
        queryClient.setQueryData(['chefs'], () => {
          return [
            ...(cacheData as []),
            {
              id: data.id,
              bio: variables.data.bio,
              image: variables.data.image,
              name: variables.data.name,
              role: variables.data.role,
              yearsOfExperience: variables.data.yearsOfExperience,
            },
          ]
        })
      } else {
        queryClient.setQueryData(['chefs'], () => {
          return (cacheData as []).map((chef: TChefResponse) => {
            if (chef.id === data.id) {
              return {
                id: data.id,
                bio: variables.data.bio,
                image: variables.data.image,
                name: variables.data.name,
                role: variables.data.role,
                yearsOfExperience: variables.data.yearsOfExperience,
              }
            }

            return chef
          })
        })
      }

      console.log({ data })
      console.log({ cacheData })

      toast.success(
        isUpdate ? 'Chef atualizado com sucesso' : 'Chef criado com sucesso',
      )

      formMethods.reset()
      closeModal()
    },
    onError: (err) => {
      const typedErr = err as TAxiosErrorApi

      if (typedErr.response?.data.statusCode === 409) {
        formMethods.setError('name', {
          type: 'manual',
          message: 'Chef já cadastrado',
        })
      }
      toast.error(isUpdate ? 'Erro ao atualizar o chef' : 'Erro ao criar Chef')
    },
  })

  const onHandleCreate = async (formData: unknown) => {
    const typedData = formData as TCreateChefOutput
    await createChefFn({
      data: {
        ...typedData,
        // @ts-expect-error Erro esperado
        id: isUpdate ? data.id : undefined,
      },
      token: token!,
    })
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
          <Form.Input.Label className="text-black">Bio</Form.Input.Label>
          <Form.TextArea.Main
            name="bio"
            type="number"
            variant={'primaryBlueDarkText'}
          />
          <Form.Input.Feedback>
            {formMethods.formState.errors.bio?.message}
          </Form.Input.Feedback>
        </Form.Input.Root>

        <Form.Input.Root>
          <Form.Input.Label className="text-black">Cargo</Form.Input.Label>
          <Form.Input.Main name="role" style={'primaryBlueDarkText'} />
          <Form.Input.Feedback className="col-span-2">
            {formMethods.formState.errors.role?.message}
          </Form.Input.Feedback>
        </Form.Input.Root>

        <Form.Input.Root>
          <Form.Input.Label className="text-black">
            Anos de experiência
          </Form.Input.Label>
          <Form.Input.Main
            name="yearsOfExperience"
            type="number"
            style={'primaryBlueDarkText'}
          />
          <Form.Input.Feedback className="col-span-2">
            {formMethods.formState.errors.yearsOfExperience?.message}
          </Form.Input.Feedback>
        </Form.Input.Root>

        <Form.Input.Root>
          <Form.Input.Label className="text-black">Url imagem</Form.Input.Label>
          <Form.Input.Main name="image" style={'primaryBlueDarkText'} />
          <Form.Input.Feedback className="col-span-2">
            {formMethods.formState.errors.image?.message}
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

export default CreateChefForm
