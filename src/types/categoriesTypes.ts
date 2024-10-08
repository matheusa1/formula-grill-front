import { TDishesResponse } from './dishesTypes'

export type TCategoriesResponse = {
  id: number
  name: string
  createdAt: string
  updatedAt: string
  dishes: TDishesResponse[]
}

export type TCategoriesResponseWithoutDishes = {
  id: number
  name: string
  createdAt: string
  updatedAt: string
}

export type TCreateCAtegoriesResponse = {
  id: number
  name: string
  createdAt: string
  updatedAt: string
}
