import { HTMLAttributes, ReactNode } from 'react'
import { VariantProps } from 'tailwind-variants'
import type { InputMainStyle } from './parts/InputMain'

export type TInputRoot = {
  children: ReactNode
} & HTMLAttributes<HTMLDivElement>

export type TInputLabel = {
  children: string
} & HTMLAttributes<HTMLLabelElement>

export type TInputMain = {} & HTMLAttributes<HTMLInputElement> &
  VariantProps<typeof InputMainStyle>

export type TInputStorybook = {} & TInputMain & TInputLabel
