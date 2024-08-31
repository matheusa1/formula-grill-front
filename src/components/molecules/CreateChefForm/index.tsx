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

const CreateChefForm: FC<TCreateChefForm> = ({ closeModal }) => {
  const { token } = useAuth()

  const formMethods = useForm<TCreateChefInput>({
    resolver: zodResolver(createChefSchama),
  })

  const onHandleCreate = async (data: unknown) => {
    const typedData = data as TCreateChefOutput

    console.log({ typedData, token })
    // await createTableFn({ data: typedData, token: token! })
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
            <Button.Text>Criar</Button.Text>
          </Button.Root>
        </footer>
      </form>
    </FormProvider>
  )
}

export default CreateChefForm
