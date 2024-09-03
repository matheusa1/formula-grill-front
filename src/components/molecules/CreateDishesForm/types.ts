import { TDishesResponse } from '@/types/dishesTypes'
import { z } from 'zod'

export type TCreateDishesForm = {
  closeModal: () => void
  data: TDishesResponse
}

export const createDishesSchama = z.object({
  name: z.string({ message: 'O nome é obrigatório' }),
  description: z.string({ message: 'A descrição é obrigatória' }),
  image: z
    .string({ message: 'A imagem é obrigatória' })
    .url({ message: 'Informe uma url valida' })
    .refine(
      (value) =>
        value.includes('.jpg') ||
        value.includes('.png') ||
        value.includes('.jpeg'),
      {
        message: 'A imagem deve ser um link válido',
      },
    ),
  category: z
    .object(
      {
        value: z.number({ message: 'A categoria é obrigatória' }),
        label: z.string({ message: 'A categoria é obrigatória' }),
      },
      { message: 'A categoria é obrigatória' },
    )
    .transform((value) => value.value),
})

export type TCreateDishesSchemaInput = z.input<typeof createDishesSchama>
export type TCreateDishesSchemaOutput = z.output<typeof createDishesSchama>
