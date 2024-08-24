import { HandPlatter } from 'lucide-react'

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
]
