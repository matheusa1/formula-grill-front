'use client'

import { FC, useState } from 'react'
import { TInputMain } from '../types'
import { tv } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'
import { Eye, EyeOff } from 'lucide-react'

export const InputMainStyle = tv({
  base: 'w-full rounded-md px-3 py-2',
  variants: {
    style: {
      primary:
        'border-2 border-ferrari-yellow-500 bg-transparent text-white outline-none',
      primaryBlue:
        'border-2 border-mercedes-blue-500 bg-transparent text-white outline-none',
    },
    password: {
      true: 'rounded-r-none border-r-0',
      false: '',
    },
  },
  defaultVariants: {
    style: 'primary',
  },
})

export const InputMain: FC<TInputMain> = ({
  style,
  password,
  type,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(password ? true : false)

  return (
    <div className="flex w-full">
      <input
        type={type ? type : showPassword ? 'password' : 'text'}
        {...rest}
        className={twMerge(InputMainStyle({ style, password }), rest.className)}
      />
      {password && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className={twMerge(
            InputMainStyle({ style, password: false }),
            'rounded-l-none border-l-0 w-fit',
          )}
        >
          {showPassword ? <Eye /> : <EyeOff />}
        </button>
      )}
    </div>
  )
}
