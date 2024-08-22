import React from 'react'
import { Input } from '../../Input'
import { Controller, useFormContext } from 'react-hook-form'
import { TInputForm } from './types'

export const InputForm: React.FC<TInputForm> = ({ name, ...rest }) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <Input.Main onChange={onChange} value={value ? value : ''} {...rest} />
      )}
    />
  )
}
