import { FC } from 'react'
import * as SwitchRadix from '@radix-ui/react-switch'
import { TSwitch } from './types'
import { twMerge } from 'tailwind-merge'

const Switch: FC<TSwitch> = ({
  checked,
  className,
  dotClassName,
  onHandleChange,
}) => {
  return (
    <SwitchRadix.Root
      className={twMerge(
        'relative h-5 w-9 cursor-default rounded-full bg-red-500 border-red-500 outline-none border-2 data-[state=checked]:border-green-500 data-[state=checked]:bg-green-500',
        className,
      )}
      checked={checked}
      onCheckedChange={onHandleChange}
    >
      <SwitchRadix.Thumb
        className={twMerge(
          'block size-4 left-1 rounded-full bg-white transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-4',
          dotClassName,
        )}
      />
    </SwitchRadix.Root>
  )
}

export default Switch
