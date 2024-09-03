import { TDishesResponse } from './dishesTypes'

export type TCategoriesResponse = {
  id: number
  name: string
  createdAt: string
  updatedAt: string
  dishes: TDishesResponse[]
}
