import Image from 'next/image'
import { FC } from 'react'
import secondLogo from '@/assets/svg/secondLogo.svg'

const Footer: FC = () => {
  return (
    <div className={'flex flex-col bg-black bg-carbon p-5'}>
      <h1>Footer</h1>
      <Image alt={'logo'} src={secondLogo} />
      <h1>Footer</h1>
    </div>
  )
}

export default Footer
