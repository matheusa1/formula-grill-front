import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

import { tv, VariantProps } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'

type TButtonRoot = {
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof ButtonRootStyle>

const ButtonRootStyle = tv({
  base: 'flex w-fit border-2 border-[#E1B168] transition-all duration-300',
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
