'use client'

import { FC, useEffect, useState } from 'react'
import Selecta from 'react-select'
import { TSelectMain } from '../types'
import { twMerge } from 'tailwind-merge'

export const SelectMain: FC<TSelectMain> = ({ variant, ...rest }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted ? (
    <Selecta
      {...rest}
      styles={{
        valueContainer: (base) => ({
          ...base,
          color: variant === 'white' ? '#000' : '#fff',
        }),
        placeholder: (base) => ({
          ...base,
          color: variant === 'white' ? '#000' : '#fff',
        }),
        singleValue: (base) => ({
          ...base,
          color: variant === 'white' ? '#000' : '#fff',
        }),
        control: (base) => ({
          ...base,
          background: variant === 'white' ? '#FFF' : 'black',
          borderColor: variant === 'white' ? '#04d1ce' : '#f9eb52',
          borderWidth: 2,
          outline: 'none',
          paddingTop: 2,
          paddingBottom: 2,
          boxShadow: 'none',
          ':hover': {
            borderColor: variant === 'white' ? '#04d1ce' : '#f9eb52',
          },
        }),
        menuList: (base) => ({
          ...base,
          color: variant === 'white' ? '#000' : '#fff',
          padding: 3,
        }),
        option: (base, state) => ({
          ...base,
          background: state.isSelected
            ? variant === 'white'
              ? '#f1f1f1'
              : '#f9eb52'
            : variant === 'white'
              ? '#fff'
              : 'black',
          color: state.isSelected
            ? 'black'
            : variant === 'white'
              ? '#000'
              : '#fff',
        }),
        menu: (base) => ({
          ...base,
          background: variant === 'white' ? '#fff' : 'black',
          color: variant === 'white' ? '#000' : '#fff',
        }),
      }}
      className={twMerge('rounded-md', rest.className)}
    />
  ) : null
}
