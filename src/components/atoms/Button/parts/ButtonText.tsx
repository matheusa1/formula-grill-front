import React from 'react'
import { FC } from 'react'
import { TButtonText } from '../type'

export const ButtonText: FC<TButtonText> = ({ children, ...rest }) => {
  return <p {...rest}>{children}</p>
}
