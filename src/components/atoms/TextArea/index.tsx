import { FC } from 'react'
import { TextAreaLabel } from './parts/TextAreaLabel'
import { TextAreaMain } from './parts/TextAreaMain'
import { TextAreaRoot } from './parts/TextAreaRoot'
import { TTextAreaStorybook } from './types'
import { TextAreaFeedback } from './parts/TextAreaFeedback'

export const TextArea = {
  Root: TextAreaRoot,
  Label: TextAreaLabel,
  Main: TextAreaMain,
  Feedback: TextAreaFeedback,
}

export const TextAreaStorybook: FC<TTextAreaStorybook> = ({
  style,
  children,
  ...rest
}) => {
  return (
    <TextArea.Root>
      <TextArea.Label>{children}</TextArea.Label>
      <TextArea.Main style={style} {...rest} />
    </TextArea.Root>
  )
}
