import Image from 'next/image'
import { FC } from 'react'
import secondLogo from '@/assets/svg/secondLogo.svg'
import FooterColumn from '@/components/molecules/FooterColumn'
import AboutCards from '@/components/molecules/AboutCards'
import { aboutCardsData } from '@/app/(home)/about'

const Footer: FC = () => {
  const data = aboutCardsData

  return (
    <div
      className={
        'flex flex-col items-center gap-10 bg-black bg-carbon p-5 lg:flex-row lg:justify-evenly lg:py-40'
      }
    >
      <FooterColumn>
        <AboutCards info={data[0].info} subInfo={data[0].subInfo} />
        <AboutCards info={data[2].info} subInfo={data[1].subInfo} />
      </FooterColumn>
      <Image alt={'logo'} src={secondLogo} className="w-full max-w-80" />
      <FooterColumn>
        <AboutCards info={data[0].info} subInfo={data[0].subInfo} />
        <AboutCards info={data[2].info} subInfo={data[1].subInfo} />
      </FooterColumn>
    </div>
  )
}

export default Footer
