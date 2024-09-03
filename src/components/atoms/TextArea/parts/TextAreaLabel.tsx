import { FC } from 'react'
import { TTextAreaLabel } from '../types'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

const TextAreaLabelStyle = tv({
  base: 'text-base font-semibold text-white',
})

export const TextAreaLabel: FC<TTextAreaLabel> = ({ children, ...rest }) => {
  return (
    <label {...rest} className={twMerge(TextAreaLabelStyle(), rest.className)}>
      {children}
    </label>
  )
}
