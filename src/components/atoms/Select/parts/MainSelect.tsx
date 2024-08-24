'use client'

import { FC, useEffect, useState } from 'react'
import Selecta from 'react-select'
import { TSelectMain } from '../types'
import { twMerge } from 'tailwind-merge'

export const SelectMain: FC<TSelectMain> = ({ ...rest }) => {
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
          color: '#fff',
        }),
        placeholder: (base) => ({
          ...base,
          color: '#fff',
        }),
        singleValue: (base) => ({
          ...base,
          color: '#fff',
        }),
        control: (base) => ({
          ...base,
          background: 'black',
          borderColor: '#f9eb52',
          borderWidth: 2,
          outline: 'none',
          paddingTop: 2,
          paddingBottom: 2,
          boxShadow: 'none',
          ':hover': {
            borderColor: '#f9eb52',
          },
        }),
        menuList: (base) => ({
          ...base,
          color: '#fff',
          padding: 3,
        }),
        option: (base, state) => ({
          ...base,
          background: state.isSelected ? '#f9eb52' : 'black',
          color: state.isSelected ? 'black' : '#fff',
        }),
        menu: (base) => ({
          ...base,
          background: 'black',
          color: '#fff',
        }),
      }}
      className={twMerge('rounded-md', rest.className)}
    />
  ) : null
}
