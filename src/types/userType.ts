export type TUserType = {
  id: number
  name: string
  email: string
}

export type TJWTDecode = {
  sub: number
  email: string
  name: string
  iat: number
  exp: number
}
