import { FC } from 'react'

type THeaderItem = {
  children: string
  path: string
}

export const HeaderItem: FC<THeaderItem> = ({ children, path }) => {
  return (
    <a
      href={path}
      className="text-white font-medium relative hover:font-bold after:w-0 hover:after:w-full after:transition-all after:h-px after:bg-white after:absolute after:bottom-0 after:left-0"
    >
      {children}
    </a>
  )
}
