import React from 'react'
import { TInputFeedback } from '../types'
import { AlertCircle, AlertTriangle } from 'lucide-react'

export const InputFeedback: React.FC<TInputFeedback> = ({ children, type }) => {
  return (
    <div className={'flex items-center gap-1 text-xs text-danger'}>
      {children && (
        <>
          {type === 'error' ? <AlertCircle /> : <AlertTriangle />}
          <span>{children}</span>
        </>
      )}
    </div>
  )
}
