import { FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { TInputRoot } from '../types'

export const InputRoot: FC<TInputRoot> = ({ children, ...rest }) => {
  return (
    <div
      {...rest}
      className={twMerge('w-full flex flex-col gap-2', rest.className)}
    >
      {children}
    </div>
  )
}
