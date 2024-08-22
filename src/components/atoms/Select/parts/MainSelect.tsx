'use client'

import { FC } from 'react'
import Selecta from 'react-select'
import { TSelectMain } from '../types'
import { twMerge } from 'tailwind-merge'

export const SelectMain: FC<TSelectMain> = ({ ...rest }) => {
  return <Selecta {...rest} className={twMerge('rounded-md', rest.className)} />
}
