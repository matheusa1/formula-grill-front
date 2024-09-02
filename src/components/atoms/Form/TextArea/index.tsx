import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { TTextAreaForm } from './types'
import { TextArea } from '../../TextArea'

export const TextAreaForm: React.FC<TTextAreaForm> = ({ name, ...rest }) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <TextArea.Main {...rest} value={value} onChange={onChange} />
      )}
    />
  )
}
