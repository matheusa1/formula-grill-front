'use client'

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { contextType } from './types'
import { TJWTDecode, TUserType } from '@/types/userType'
import { TSignInScheme } from '@/components/molecules/LoginForm/types'
import { login } from '@/services/api'
import Cookie from 'js-cookie'
import { jwtDecode } from 'jwt-decode'

const AuthContext = createContext({} as contextType)

export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<TUserType>()

  const signOut = useCallback(() => {
    setUser(undefined)
    Cookie.remove('token')
  }, [])

  const setUserInfo = useCallback(
    async (token: string) => {
      const decoded: TJWTDecode = await jwtDecode(token)

      if (!decoded) {
        signOut()
      }

      if (decoded.exp < Date.now() / 1000) {
        signOut()
      }

      setUser({
        id: decoded.sub,
        name: decoded.name,
        email: decoded.email,
      })
    },
    [signOut],
  )

  const signIn = useCallback(
    async (data: TSignInScheme) => {
      try {
        const response = await login(data)

        Cookie.set('token', response.access_token, {
          expires: 1,
        })

        setUserInfo(response.access_token)

        return { error: false, data: response.data }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        return { error: true, data: error?.response?.data }
      }
    },
    [setUserInfo],
  )

  const getToken = useCallback(() => {
    const token = Cookie.get('token')
    return token
  }, [])

  useEffect(() => {
    const token = getToken()

    if (token) {
      setUserInfo(token)
    }
  }, [getToken, setUserInfo])

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
