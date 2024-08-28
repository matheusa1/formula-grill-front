import React from 'react'

export type TAdminSidebarItem = {
  text: string
  icon: (active?: boolean) => React.ReactNode
  active?: boolean
  path: string
}
