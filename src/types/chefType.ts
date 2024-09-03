export type TChefResponse = {
  id: number
  name: string
  bio: string
  role: string
  image: string
  yearsOfExperience: number
  createdAt: string
  updatedAt: string
}

export type TUpdateChef = {
  id: number
  name: string
  bio: string
  role: string
  image: string
  yearsOfExperience: number
}
