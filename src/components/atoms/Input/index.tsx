import { FC } from 'react'
import { InputLabel } from './parts/InputLabel'
import { InputMain } from './parts/InputMain'
import { InputRoot } from './parts/InputRoot'
import { TInputStorybook } from './types'
import { InputFeedback } from './parts/InputFeedback'

export const Input = {
  Root: InputRoot,
  Label: InputLabel,
  Main: InputMain,
  Feedback: InputFeedback,
}

export const InputStorybook: FC<TInputStorybook> = ({
  style,
  children,
  ...rest
}) => {
  return (
    <Input.Root>
      <Input.Label>{children}</Input.Label>
      <Input.Main style={style} {...rest} />
    </Input.Root>
  )
}
