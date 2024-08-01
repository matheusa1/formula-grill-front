import React from 'react'
import { FC } from 'react'
import { TButtonText } from '../types'
import { tv } from 'tailwind-variants'

export const ButtonText: FC<TButtonText> = ({ children, ...rest }) => {
  return <p {...rest}>{children}</p>
}
