'use client'

import { FC } from 'react'
import { TTextAreaMain } from '../types'
import { tv } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'

export const TextAreaMainStyle = tv({
  base: 'w-full rounded-md px-3 py-2',
  variants: {
    variant: {
      primary:
        'border-2 border-ferrari-yellow-500 bg-transparent text-white outline-none',
      primaryBlue:
        'border-2 border-mercedes-blue-500 bg-transparent text-white outline-none',
      primaryDarkText:
        'border-2 border-ferrari-yellow-500 bg-transparent text-black outline-none',
      primaryBlueDarkText:
        'border-2 border-mercedes-blue-500 bg-transparent text-black outline-none',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export const TextAreaMain: FC<TTextAreaMain> = ({ variant, ...rest }) => {
  return (
    <textarea
      {...rest}
      className={twMerge(TextAreaMainStyle({ variant }), rest.className)}
    />
  )
}
