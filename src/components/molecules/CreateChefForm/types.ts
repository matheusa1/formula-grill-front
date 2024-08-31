import { z } from 'zod'

export type TCreateChefForm = {
  closeModal: () => void
}

export const createChefSchama = z.object({
  name: z.string({ message: 'O nome é obrigatório' }),
  bio: z.string({ message: 'A bio é obrigatória' }),
  role: z.string({ message: 'O cargo é obrigatório' }),
  image: z.string({ message: 'A imagem é obrigatória' }),
})

export type TCreateChefInput = z.input<typeof createChefSchama>
export type TCreateChefOutput = z.output<typeof createChefSchama>
