import { TUserType } from '@/types/userType'

export type contextType = {
  user?: TUserType
  token?: string
  signIn: (email: string, password: string) => void
  signOut: () => void
}
