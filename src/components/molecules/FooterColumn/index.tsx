import { FC } from 'react'
import { TFooterColumn } from './types'

const FooterColumn: FC<TFooterColumn> = ({ children }) => {
  return (
    <div
      className={'flex flex-col items-center justify-center gap-5 text-center'}
    >
      {children}
    </div>
  )
}

export default FooterColumn
