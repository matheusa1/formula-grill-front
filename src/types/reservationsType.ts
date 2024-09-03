export type TReservationsResponse = {
  id: number
  dateStart: string
  dateEnd: string
  phone: string
  seatCount: number
  name: string
  createdAt: string
  updatedAt: string
  mesaId: number
  userID: number
}

export type TCancelReservationResponse = {
  status: string
  message: string
}
