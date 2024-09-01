import { TSignInScheme } from '@/components/molecules/LoginForm/types'
import { TUserType } from '@/types/userType'

export type contextType = {
  user?: TUserType
  token?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  signIn: (data: TSignInScheme) => Promise<{ error: boolean; data: any }>
  signOut: () => void
  isAdmin: boolean
}
