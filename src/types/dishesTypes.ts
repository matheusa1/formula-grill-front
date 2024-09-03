import { TCategoriesResponseWithoutDishes } from './categoriesTypes'

export type TDishesResponse = {
  id: number
  name: string
  description: string
  category: TCategoriesResponseWithoutDishes
  image: string
  createdAt: string
  updatedAt: string
}

export type TUpdateDishes = {
  id: number
  name: string
  description: string
  categoryId: number
  image: string
}
