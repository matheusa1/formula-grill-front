import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

import { tv, VariantProps } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'

type TButtonRoot = {
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof ButtonRootStyle>

export const ButtonRootStyle = tv({
  base: 'flex w-fit border-2 h-fit border-ferrari-yellow-500 transition-all duration-300 rounded-sm',
  variants: {
    style: {
      primary:
        'bg-ferrari-yellow-500 text-black hover:bg-ferrari-yellow-300 hover:drop-shadow-yellow hover:border-ferrari-yellow-300',
      outline:
        'bg-transparent text-ferrari-yellow-500 hover:bg-ferrari-yellow-500 hover:text-black',
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
      className={twMerge(
        ButtonRootStyle({ size, style, fontCase, fontWeight }),
        rest.className,
      )}
    >
      {children}
    </button>
  )
}
