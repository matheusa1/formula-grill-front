import { z } from 'zod'

export type TCreateTableForm = {
  closeModal: () => void
}

export const createTableSchama = z.object({
  code: z.string({ message: 'O código é obrigatório' }),
  seats: z
    .string({ message: 'O número de assentos é obrigatório' })
    .transform((value) => Number(value))
    .refine((value) => value > 0, {
      message: 'O número de assentos deve ser maior que 0',
    }),
  status: z.boolean({ message: 'O status é obrigatório' }),
})

export type TCreateTableSchamaInput = z.input<typeof createTableSchama>
export type TCreateTableSchamaOutput = z.output<typeof createTableSchama>
