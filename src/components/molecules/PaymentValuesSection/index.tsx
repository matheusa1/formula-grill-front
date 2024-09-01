'use client'

import { Button } from '@/components/atoms/Button'
import { FC } from 'react'

const PaymentValuesSection: FC = () => {
  return (
    <div className={'flex flex-col gap-10 text-white'}>
      <header className="flex flex-col gap-2">
        <p className="flex gap-2">
          <strong>Valor a pagar:</strong>
          R$70,00
        </p>
        <p className="flex gap-2">
          <strong>Forma de pagamento:</strong>
          Pix
        </p>
      </header>

      <main className=" flex flex-col items-center justify-center gap-5">
        <div className="text-wrap break-all rounded-sm bg-gray-400 p-2 text-black">
          SACSDVSDV5SD5C3ZSSKSAOPAULOCAFEBOOKSL-2023KJKJCDKJSASAKJASLAS45SDC65SX65SS3X6
        </div>
        <Button.Root
          onClick={() => {
            navigator.clipboard.writeText(
              'SACSDVSDV5SD5C3ZSSKSAOPAULOCAFEBOOKSL-2023KJKJCDKJSASAKJASLAS45SDC65SX65SS3X6',
            )
          }}
        >
          <Button.Text>Copiar código</Button.Text>
        </Button.Root>
      </main>
    </div>
  )
}

export default PaymentValuesSection
