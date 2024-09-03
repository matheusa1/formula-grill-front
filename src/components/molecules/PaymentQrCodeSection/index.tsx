import { FC } from 'react'
import qrcode from '@/assets/images/qrcode.png'
import Image from 'next/image'

const PaymentQrCodeSection: FC = () => {
  return (
    <div className={'flex w-fit max-w-80 flex-col gap-2 lg:place-self-center'}>
      <Image alt="qrcode" src={qrcode} className="w-full max-w-80" />
      <p className="w-fit text-center text-xs text-white">
        Pix tem o pagamento aprovado na hora. Você poderá finalizar o seu Pix
        por meio do QR Code ou código no banco que preferir! Mas fique atento,
        este código só será válido por 4 horas. Ao clicar em comprar, você dá
        ciência e aceita os termos desta transação.
      </p>
    </div>
  )
}

export default PaymentQrCodeSection
