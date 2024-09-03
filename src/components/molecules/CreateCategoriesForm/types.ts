import { z } from 'zod'

export type TCreateCategoriesForm = {
  closeModal: () => void
}

export const createCategoriesSchama = z.object({
  name: z.string({ message: 'O nome é obrigatório' }),
})

export type TCreateCategoriesSchemaInput = z.input<
  typeof createCategoriesSchama
>
export type TCreateCategoriesSchemaOutput = z.output<
  typeof createCategoriesSchama
>
