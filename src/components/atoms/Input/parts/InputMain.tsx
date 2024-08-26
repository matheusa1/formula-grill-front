'use client'

import { FC, useState } from 'react'
import { TInputMain } from '../types'
import { tv } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'
import { Eye, EyeOff, Search } from 'lucide-react'

export const InputMainStyle = tv({
  base: 'w-full rounded-md px-3 py-2',
  variants: {
    style: {
      primary:
        'border-2 border-ferrari-yellow-500 bg-transparent text-white outline-none',
      primaryBlue:
        'border-2 border-mercedes-blue-500 bg-transparent text-white outline-none',
      primaryDarkText:
        'border-2 border-ferrari-yellow-500 bg-transparent text-black outline-none',
      primaryBlueDarkText:
        'border-2 border-mercedes-blue-500 bg-transparent text-black outline-none',
    },
    password: {
      true: 'rounded-r-none border-r-0',
      false: '',
    },
    search: {
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
  search,
  type,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(password ? true : false)

  return (
    <div className="flex w-full">
      <input
        type={type ? type : showPassword ? 'password' : 'text'}
        {...rest}
        className={twMerge(
          InputMainStyle({ style, password, search }),
          rest.className,
        )}
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
      {search && (
        <button
          type="button"
          className={twMerge(
            InputMainStyle({ style, search: false }),
            'rounded-l-none border-l-0 w-fit',
          )}
        >
          <Search />
        </button>
      )}
    </div>
  )
}
