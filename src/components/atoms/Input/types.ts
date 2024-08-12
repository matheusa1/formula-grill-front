import {
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  ReactNode,
} from 'react'
import { VariantProps } from 'tailwind-variants'
import type { InputMainStyle } from './parts/InputMain'

export type TInputRoot = {
  children: ReactNode
} & HTMLAttributes<HTMLDivElement>

export type TInputLabel = {
  children: string
} & LabelHTMLAttributes<HTMLLabelElement>

export type TInputMain = {
  type?: string
} & InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof InputMainStyle>

export type TInputFeedback = {
  children?: string
  type?: 'error' | 'warn'
}

export type TInputStorybook = {} & TInputMain & TInputLabel
