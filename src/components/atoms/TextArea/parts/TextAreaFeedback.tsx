import React from 'react'
import { TTextAreaFeedback } from '../types'
import { AlertCircle, AlertTriangle } from 'lucide-react'

export const TextAreaFeedback: React.FC<TTextAreaFeedback> = ({
  children,
  type,
}) => {
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
