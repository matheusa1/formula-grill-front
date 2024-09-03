import { AxiosError } from 'axios'

export type TErrorAPI = {
  message: string
  statusCode: number
  error: string
}

export type TAxiosErrorApi = AxiosError<TErrorAPI>
