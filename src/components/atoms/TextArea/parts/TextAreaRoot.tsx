import { FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { TTextAreaRoot } from '../types'

export const TextAreaRoot: FC<TTextAreaRoot> = ({ children, ...rest }) => {
  return (
    <div
      {...rest}
      className={twMerge(
        'w-full flex flex-col gap-2 text-start',
        rest.className,
      )}
    >
      {children}
    </div>
  )
}
