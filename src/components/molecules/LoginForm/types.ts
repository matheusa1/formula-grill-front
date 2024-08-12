import { z } from 'zod'

const messages = {
  email: 'Preencha com um e-mail válido',
  nonempty: 'Campo obrigatório',
}

export const SignInScheme = z.object({
  email: z.string().email(messages.email).nonempty(messages.nonempty),
  password: z.string().nonempty(messages.nonempty),
})

export type ISignInScheme = z.infer<typeof SignInScheme>
