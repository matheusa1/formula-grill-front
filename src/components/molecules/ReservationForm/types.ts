import { z } from 'zod'

export const reservationSchema = z
  .object({
    name: z.string({ message: 'O nome é obrigatório' }),
    phone: z
      .string({ message: 'O telefone é obrigatório' })
      .transform((value) => value.replace(/\D/g, ''))
      .refine((value) => value.length === 11, {
        message: 'O telefone deve conter 11 dígitos',
      }),
    quantity: z
      .string({ message: 'A quantidade de pessoas é obrigatória' })
      .transform((value) => Number(value))
      .refine((value) => value > 0, {
        message: 'A quantidade de pessoas deve ser maior que 0',
      }),
    date: z
      .string({ message: 'A data é obrigatória' })
      .transform((value) => {
        const date = new Date(value)
        const timezone = date.getTimezoneOffset()

        const correctTimezone = date.setMinutes(date.getMinutes() + timezone)

        return new Date(correctTimezone)
      })
      .refine((value) => new Date() < value, {
        message: 'A data deve ser maior que a data atual',
      })
      .refine((value) => value.getFullYear() >= new Date().getFullYear(), {
        message: 'A data deve ser no ano atual',
      }),
    startHour: z
      .object(
        {
          label: z.string(),
          value: z.number(),
        },
        { message: 'A hora de início é obrigatória' },
      )
      .transform((value) => value.value),
    endHour: z
      .object(
        {
          label: z.string(),
          value: z.number(),
        },
        { message: 'A hora de término é obrigatória' },
      )
      .transform((value) => value.value),
  })
  .refine((data) => data.endHour >= data.startHour, {
    message: 'A hora de término deve ser maior que a hora de início',
    path: ['endHour'],
  })
  .transform((data) => {
    const { startHour, endHour, date, ...rest } = data

    const startHourDate = new Date(date).setHours(startHour, 0, 0, 0)
    const endHourDate = new Date(date).setHours(endHour, 0, 0, 0)
    return {
      ...rest,
      date,
      startHour: new Date(startHourDate).toISOString(),
      endHour: new Date(endHourDate).toISOString(),
    }
  })

export type TReservationSchema = z.infer<typeof reservationSchema>
export type TReservationSchemaInput = z.input<typeof reservationSchema>
export type TReservationSchemaOutput = z.output<typeof reservationSchema>
