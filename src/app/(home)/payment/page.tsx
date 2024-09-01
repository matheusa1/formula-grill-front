import PaymentHeader from '@/components/molecules/PaymentHeader'
import PaymentBody from '@/components/organisms/PaymentBody'
import { FC } from 'react'

const Payment: FC = () => {
  return (
    <div className={'flex flex-col'}>
      <PaymentHeader />
      <PaymentBody />
    </div>
  )
}

export default Payment
