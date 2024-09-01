export type TUserType = {
  id: number
  name: string
  email: string
  role: string
}

export type TJWTDecode = {
  sub: number
  email: string
  name: string
  role: string
  iat: number
  exp: number
}
