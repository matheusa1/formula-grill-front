'use client'

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react'
import { contextType } from './types'
import { TUserType } from '@/types/userType'

const AuthContext = createContext({} as contextType)

export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<TUserType>()

  const signIn = useCallback((email: string, password: string) => {
    console.log('signIn', email, password)
  }, [])

  const signOut = useCallback(() => {
    console.log('signOut')
  }, [])

  const getToken = useCallback(() => {
    console.log('getToken')

    return 'token'
  }, [])

  return (
    <AuthContext.Provider
      value={{ user, signIn: signIn, signOut, token: getToken() }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthContextProvider')
  }

  return context
}
