import { ButtonHTMLAttributes, ReactNode } from 'react'
import { VariantProps } from 'tailwind-variants'
import { ButtonRootStyle } from './parts/ButtonRoot'

type ButtonStyleType = typeof ButtonRootStyle

export type TButtonRoot = {
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<ButtonStyleType>

export type TButtonText = {
  children: string
}
