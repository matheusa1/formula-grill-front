import { useSidebar } from '@/context/AdminSidebarContext'
import React, { ReactElement } from 'react'
import { TAdminSidebarItem } from './types'
import { tv } from 'tailwind-variants'
import Link from 'next/link'
import { useWindow } from '@/hooks/useWindow'

const containerStyles = tv({
  base: 'relative flex h-14 w-full shrink-0 cursor-pointer select-none flex-row items-center justify-start gap-5  px-7 text-white hover:bg-blue-900/50',
  variants: {
    active: {
      true: 'cursor-default bg-white text-mercedes-blue-500 hover:bg-white',
    },
    sidebarState: {
      true: 'w-full rounded-full lg:rounded-l-full lg:rounded-r-none',
      false: 'size-14 items-center overflow-hidden rounded-full pl-4',
    },
  },
  defaultVariants: {
    active: false,
  },
})

const AdminSidebarItem: React.FC<TAdminSidebarItem> = ({
  icon,
  path,
  text,
  active,
}): ReactElement => {
  const { isSidebarOpen, toggleSidebar } = useSidebar()
  const { width } = useWindow()

  return (
    <Link
      href={path}
      onClick={() => {
        if (width >= 1024) {
          return
        }
        toggleSidebar()
      }}
      className={containerStyles({ active, sidebarState: isSidebarOpen })}
    >
      {active && width >= 1024 && (
        <>
          <div className="absolute -top-4 right-0 size-4 bg-white before:absolute before:right-0 before:top-0 before:size-4 before:rounded-br-full before:bg-black before:content-['']" />
          <div className="absolute -bottom-4 right-0 size-4 bg-white before:absolute before:right-0 before:top-0 before:size-4 before:rounded-tr-full before:bg-black before:content-['']" />
        </>
      )}
      <div className="shrink-0">{icon(active)}</div>
      <span className="text-sm font-bold">{text}</span>
    </Link>
  )
}

export default AdminSidebarItem
