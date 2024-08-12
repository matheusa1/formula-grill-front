import { FC } from 'react'
import { ButtonRoot } from './parts/ButtonRoot'
import { ButtonText } from './parts/ButtonText'
import { TStorybookButton } from './type'

export const Button = {
  Root: ButtonRoot,
  Text: ButtonText,
}

export const StorybookButton: FC<TStorybookButton> = ({
  children,
  size,
  style,
  fontCase,
  fontWeight,
}) => {
  return (
    <Button.Root
      size={size}
      style={style}
      fontCase={fontCase}
      fontWeight={fontWeight}
    >
      <Button.Text>{children}</Button.Text>
    </Button.Root>
  )
}
