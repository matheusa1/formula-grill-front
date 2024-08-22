'use client'

import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { reservationSchema, TReservationSchema } from './types'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/atoms/Button'
import { Form } from '@/components/atoms/Form'

const ReservationForm: FC = () => {
  const formMethods = useForm<TReservationSchema>({
    resolver: zodResolver(reservationSchema),
  })

  console.log(formMethods.formState.errors)

  const onHandleClick = (data: TReservationSchema) => {
    console.log(data)
  }

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={formMethods.handleSubmit(onHandleClick)}
        className={'grid grid-cols-1 gap-4'}
      >
        <Form.Input.Root>
          <Form.Input.Label>Telefone</Form.Input.Label>
          <Form.Input.Main name={'phone'} type={'tel'} />
          <Form.Input.Feedback>
            {formMethods.formState.errors.phone?.message}
          </Form.Input.Feedback>
        </Form.Input.Root>

        <Form.Input.Root>
          <Form.Input.Label>Pessoas</Form.Input.Label>
          <Form.Input.Main name={'quantity'} type={'number'} />
          <Form.Input.Feedback>
            {formMethods.formState.errors.quantity?.message}
          </Form.Input.Feedback>
        </Form.Input.Root>

        <Form.Input.Root>
          <Form.Input.Label>Data</Form.Input.Label>
          <Form.Input.Main name={'date'} type={'date'} />
          <Form.Input.Feedback>
            {formMethods.formState.errors.date?.message}
          </Form.Input.Feedback>
        </Form.Input.Root>

        <Form.Input.Root>
          <Form.Input.Label>Hora Inicio</Form.Input.Label>
          <Form.Select.Main
            name={'hour'}
            classNames={{
              control: () => 'bg-black',
            }}
            className="border-2 border-ferrari-yellow-500 bg-black text-white hover:border-ferrari-yellow-300 focus:border-ferrari-yellow-300 disabled:bg-slate-100"
          />
          <Form.Input.Feedback>
            {formMethods.formState.errors.startHour?.message}
          </Form.Input.Feedback>
        </Form.Input.Root>

        <Form.Input.Root>
          <Form.Input.Label>Hora Fim</Form.Input.Label>
          <Form.Select.Main name={'hour'} />
          <Form.Input.Feedback>
            {formMethods.formState.errors.endHour?.message}
          </Form.Input.Feedback>
        </Form.Input.Root>
        <Button.Root>
          <Button.Text>Reservar</Button.Text>
        </Button.Root>
      </form>
    </FormProvider>
  )
}

export default ReservationForm
