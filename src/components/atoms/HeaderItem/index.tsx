import { FC } from 'react'

type THeaderItem = {
  children: string
  path: string
}

export const HeaderItem: FC<THeaderItem> = ({ children, path }) => {
  return (
    <a
      href={path}
      className="relative font-medium text-white after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all hover:font-bold hover:after:w-full"
    >
      {children}
    </a>
  )
}
