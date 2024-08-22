import { FC } from 'react'
import { TInputLabel } from '../types'
import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

const InputLabelStyle = tv({
  base: 'text-base font-semibold text-white',
})

export const InputLabel: FC<TInputLabel> = ({ children, ...rest }) => {
  return (
    <label {...rest} className={twMerge(InputLabelStyle(), rest.className)}>
      {children}
    </label>
  )
}
