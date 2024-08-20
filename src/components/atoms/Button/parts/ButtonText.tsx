import React from 'react'
import { FC } from 'react'
import { TButtonText } from '../types'

export const ButtonText: FC<TButtonText> = ({ children, ...rest }) => {
  return <p {...rest}>{children}</p>
}
