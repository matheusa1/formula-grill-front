import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import { ButtonRoot, ButtonRootStyle } from './parts/ButtonRoot'
import { ButtonText } from './parts/ButtonText'
import { VariantProps } from 'tailwind-variants'

export const Button = {
  Root: ButtonRoot,
  Text: ButtonText,
}

type TStorybookButton = {
  children: string
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof ButtonRootStyle>

export const StorybookButton: FC<TStorybookButton> = ({
  children,
  size,
  style,
}) => {
  return (
    <Button.Root size={size} style={style}>
      <Button.Text>{children}</Button.Text>
    </Button.Root>
  )
}
