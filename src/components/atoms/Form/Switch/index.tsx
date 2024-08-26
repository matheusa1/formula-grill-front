import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { TSwitchForm } from './types'
import Switch from '../../Switch'

export const SwitchForm: React.FC<TSwitchForm> = ({ name, ...rest }) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <Switch {...rest} onHandleChange={onChange} checked={value} />
      )}
    />
  )
}
