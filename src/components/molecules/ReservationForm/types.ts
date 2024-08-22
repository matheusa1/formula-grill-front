import { z } from 'zod'

export const reservationSchema = z.object({
  phone: z.string(),
  quantity: z.number().int().min(1, 'A quantidade mínima é 1'),
  date: z.date(),
  startHour: z.number(),
  endHour: z.number(),
})

export type TReservationSchema = z.infer<typeof reservationSchema>
