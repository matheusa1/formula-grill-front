import { z } from 'zod'

const messages = {
  email: 'Preencha com um e-mail válido',
  nonempty: 'Campo obrigatório',
}

export const SignUpScheme = z
  .object({
    name: z.string().nonempty(messages.nonempty),
    email: z.string().email(messages.email).nonempty(messages.nonempty),
    password: z.string().nonempty(messages.nonempty),
    confirmPassword: z.string().nonempty(messages.nonempty),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas precisam ser iguais',
    path: ['confirmPassword'],
  })

export type TSignUpScheme = z.infer<typeof SignUpScheme>
