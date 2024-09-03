import { TChefResponse } from '@/types/chefType'
import { z } from 'zod'

export type TCreateChefForm = {
  closeModal: () => void
  data?: TChefResponse
}

export const createChefSchama = z.object({
  name: z.string({ message: 'O nome é obrigatório' }),
  bio: z.string({ message: 'A bio é obrigatória' }),
  role: z.string({ message: 'O cargo é obrigatório' }),
  image: z
    .string({ message: 'A imagem é obrigatória' })
    .url({ message: 'A imagem deve ser uma URL válida' })
    .refine(
      (value) =>
        value.includes('.jpg') ||
        value.includes('.png') ||
        value.includes('.jpeg'),
      {
        message: 'A imagem deve ser um link válido',
      },
    ),
  yearsOfExperience: z
    .string({
      message: 'Os anos de experiência são obrigatórios',
    })
    .transform((value) => Number(value)),
})

export type TCreateChefInput = z.input<typeof createChefSchama>
export type TCreateChefOutput = z.output<typeof createChefSchama>
