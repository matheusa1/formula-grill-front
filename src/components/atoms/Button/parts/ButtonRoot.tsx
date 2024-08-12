import { FC } from 'react'

import { tv } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'
import { TButtonRoot } from '../types'

export const ButtonRootStyle = tv({
  base: 'flex size-fit justify-center rounded-sm border-2 transition-all duration-300',
  variants: {
    style: {
      primary:
        'border-ferrari-yellow-500 bg-ferrari-yellow-500 text-black hover:border-ferrari-yellow-300 hover:bg-ferrari-yellow-300 hover:drop-shadow-yellow',
      outline:
        'border-ferrari-yellow-500 bg-transparent text-ferrari-yellow-500 hover:bg-ferrari-yellow-500 hover:text-black',
      primaryBlue:
        'border-mercedes-blue-500 bg-mercedes-blue-500 text-black hover:border-mercedes-blue-300 hover:bg-mercedes-blue-300 hover:drop-shadow-yellow',
      outlineBlue:
        'border-mercedes-blue-500 bg-transparent text-mercedes-blue-500 hover:bg-mercedes-blue-500 hover:text-white',
    },
    fontCase: {
      uppercase: 'uppercase',
      lowercase: 'lowercase',
      capitalize: 'capitalize',
      normal: 'normal-case',
    },
    fontWeight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    size: {
      icon: 'p-px',
      sm: 'px-4 py-1 text-lg',
      md: 'px-10 py-2 text-xl',
      lg: 'px-16 py-3 text-2xl',
    },
  },
  defaultVariants: {
    size: 'md',
    style: 'primary',
    fontCase: 'uppercase',
    fontWeight: 'semibold',
  },
})

export const ButtonRoot: FC<TButtonRoot> = ({
  children,
  size,
  style,
  fontCase,
  fontWeight,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={twMerge(
        ButtonRootStyle({ size, style, fontCase, fontWeight }),
        rest.className,
      )}
    >
      {children}
    </button>
  )
}
