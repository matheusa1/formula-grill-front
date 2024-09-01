import { TSignInScheme } from '@/components/molecules/LoginForm/types'
import { TSignUpScheme } from './../components/molecules/SignUpForm/types'
import axios from 'axios'
import {
  TCreateTableResponse,
  TTable,
  TTableCreate,
  TTables,
} from '@/types/tableType'
import { TUserType } from '@/types/userType'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

export const getUserData = async (token: string) => {
  const response = await api.get<TUserType>('/user/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data
}

export const createUser = async (data: TSignUpScheme) => {
  const response = await api.post('/user', {
    ...data,
    confirmPassword: undefined,
  })

  return response.data
}

export const login = async (data: TSignInScheme) => {
  const response = await api.post('/login', {
    email: data.email,
    password: data.password,
  })

  return response.data
}

export const getTables = async (token: string) => {
  const response = await api.get<TTables>('/mesas', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data
}

export const createTable = async ({
  data,
  token,
}: {
  data: TTableCreate
  token: string
}) => {
  const response = await api.post<TCreateTableResponse>('/mesas', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data
}

export const updateTable = async ({
  data,
  token,
}: {
  data: TTable
  token: string
}) => {
  const response = await api.patch<TTable>(
    `/mesas/${data.id}`,
    { ...data, id: undefined },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )

  return response.data
}
