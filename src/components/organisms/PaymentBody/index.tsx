import PaymentQrCodeSection from '@/components/molecules/PaymentQrCodeSection'
import PaymentValuesSection from '@/components/molecules/PaymentValuesSection'
import { FC } from 'react'

const PaymentBody: FC = () => {
  return (
    <div
      className={
        'flex flex-col items-center gap-10 p-5 lg:grid lg:grid-cols-2 lg:p-10'
      }
    >
      <PaymentValuesSection />
      <PaymentQrCodeSection />
    </div>
  )
}

export default PaymentBody
