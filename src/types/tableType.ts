export type TTable = {
  id: number
  code: string
  status: boolean
  seats: number
}

export type TTableCreate = {
  code: string
  status: boolean
  seats: number
}

export type TCreateTableResponse = {
  id: number
  code: string
  status: boolean
  seats: number
  createdAt: string
  updatedAt: string
}

export type TTables = TTable[]
