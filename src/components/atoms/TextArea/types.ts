import {
  HTMLAttributes,
  LabelHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from 'react'
import { VariantProps } from 'tailwind-variants'
import type { TextAreaMainStyle } from './parts/TextAreaMain'

export type TTextAreaRoot = {
  children: ReactNode
} & HTMLAttributes<HTMLDivElement>

export type TTextAreaLabel = {
  children: string
} & LabelHTMLAttributes<HTMLLabelElement>

export type TTextAreaMain = {
  type?: string
} & TextareaHTMLAttributes<HTMLTextAreaElement> &
  VariantProps<typeof TextAreaMainStyle>

export type TTextAreaFeedback = {
  children?: string
  type?: 'error' | 'warn'
} & HTMLAttributes<HTMLSpanElement>

export type TTextAreaStorybook = {} & TTextAreaMain & TTextAreaLabel
