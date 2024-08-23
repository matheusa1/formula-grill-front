'use client'

import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import {
  reservationSchema,
  TReservationSchemaInput,
  TReservationSchemaOutput,
} from './types'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/atoms/Button'
import { Form } from '@/components/atoms/Form'
import InputMask from 'react-input-mask'

const hours = [
  { value: 0, label: '08:00' },
  { value: 10, label: '10:00' },
  { value: 12, label: '12:00' },
  { value: 14, label: '14:00' },
  { value: 16, label: '16:00' },
  { value: 18, label: '18:00' },
  { value: 20, label: '20:00' },
  { value: 22, label: '22:00' },
]

const ReservationForm: FC = () => {
  const formMethods = useForm<TReservationSchemaInput>({
    resolver: zodResolver(reservationSchema),
  })

  formMethods.watch('startHour')

  const onHandleClick = (data: unknown) => {
    const typedData = data as TReservationSchemaOutput
    console.log(typedData)
  }

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={formMethods.handleSubmit(onHandleClick)}
        className={'grid grid-cols-1 gap-4 md:grid-cols-2'}
      >
        <Form.Input.Root>
          <Form.Input.Label>Nome Reserva</Form.Input.Label>
          <Form.Input.Main name={'name'} />
          <Form.Input.Feedback>
            {formMethods.formState.errors.name?.message}
          </Form.Input.Feedback>
        </Form.Input.Root>

        <Form.Input.Root>
          <Form.Input.Label>Telefone</Form.Input.Label>
          <InputMask
            mask="(99) 99999-9999"
            value={formMethods.watch('phone')}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              formMethods.setValue('phone', e.target.value)
            }
          >
            <Form.Input.Main name={'phone'} type={'tel'} />
          </InputMask>
          <Form.Input.Feedback>
            {formMethods.formState.errors.phone?.message}
          </Form.Input.Feedback>
        </Form.Input.Root>

        <Form.Input.Root>
          <Form.Input.Label>Quantidade de Pessoas</Form.Input.Label>
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
          <Form.Select.Main name={'startHour'} options={hours} isClearable />
          <Form.Input.Feedback>
            {formMethods.formState.errors.startHour?.message}
          </Form.Input.Feedback>
        </Form.Input.Root>

        <Form.Input.Root>
          <Form.Input.Label>Hora Fim</Form.Input.Label>
          <Form.Select.Main
            name={'endHour'}
            options={hours.filter(
              (data) => data.value >= formMethods.getValues('startHour')?.value,
            )}
            isClearable
            noOptionsMessage={() => 'Selecione uma hora de início'}
          />
          <Form.Input.Feedback>
            {formMethods.formState.errors.endHour?.message}
          </Form.Input.Feedback>
        </Form.Input.Root>
        <Button.Root className="w-full md:col-span-2 md:mx-auto md:w-fit">
          <Button.Text>Reservar</Button.Text>
        </Button.Root>
      </form>
    </FormProvider>
  )
}

export default ReservationForm
