import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { TSelectForm } from './types'
import { Select } from '../../Select'

export const SelectForm: React.FC<TSelectForm> = ({ name, ...rest }) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <Select.Select {...rest} value={value} onChange={onChange} />
      )}
    />
  )
}
