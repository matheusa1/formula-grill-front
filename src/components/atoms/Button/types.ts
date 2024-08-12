import { ButtonHTMLAttributes, ReactNode } from 'react'
import { VariantProps } from 'tailwind-variants'
import type { ButtonRootStyle } from './parts/ButtonRoot'

export type TButtonRoot = {
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof ButtonRootStyle>

export type TButtonText = {
  children: string
}

export type TStorybookButton = {
  children: string
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof ButtonRootStyle>
