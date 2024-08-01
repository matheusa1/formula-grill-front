import React from 'react'
import { FC } from 'react'

type TButtonText = {
  children: string
}

export const ButtonText: FC<TButtonText> = ({ children, ...rest }) => {
  return <p {...rest}>{children}</p>
}
