import { FC } from 'react'
import { TButtonRoot } from '../types'
import { tv } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'

export const ButtonRootStyle = tv({
  base: 'flex border-2 w-fit border-[#E1B168] transition-all duration-300',
  variants: {
    style: {
      primary: 'bg-[#E1B168] text-black hover:bg-black hover:text-[#E1B168]',
      outline:
        'bg-transparent text-[#E1B168] hover:bg-[#E1B168] hover:text-black',
    },
    size: {
      sm: 'px-4 py-1 text-lg',
      md: 'px-10 py-2 text-xl',
      lg: 'px-16 py-3 text-2xl',
    },
  },
  defaultVariants: {
    size: 'md',
    style: 'primary',
  },
})

export const ButtonRoot: FC<TButtonRoot> = ({
  children,
  size,
  style,
  ...rest
}) => {
  return (
    <button
      className={twMerge(ButtonRootStyle({ size, style }), rest.className)}
    >
      {children}
    </button>
  )
}
