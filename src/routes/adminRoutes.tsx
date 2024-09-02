import { CalendarCheck, ChefHat, HandPlatter } from 'lucide-react'

const iconSize = 24

export const Paths = [
  {
    path: '/admin/tables',
    name: 'Mesas',
    icon: (active?: boolean) => (
      <HandPlatter
        size={iconSize}
        className={active ? 'text-mercedes-blue-500' : 'text-white'}
      />
    ),
  },
  {
    path: '/admin/chefs',
    name: 'Chefs',
    icon: (active?: boolean) => (
      <ChefHat
        size={iconSize}
        className={active ? 'text-mercedes-blue-500' : 'text-white'}
      />
    ),
  },
  {
    path: '/admin/reservations',
    name: 'Reservas',
    icon: (active?: boolean) => (
      <CalendarCheck
        size={iconSize}
        className={active ? 'text-mercedes-blue-500' : 'text-white'}
      />
    ),
  },
]
