import AboutCards from '@/components/molecules/AboutCards'
import { BookOpenText, Clock, MapPin } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'

import AboutImage1 from '@/assets/images/AboutIamge1.jpg'
import AboutImage2 from '@/assets/images/sign_image.png'

const About: FC = () => {
  const aboutCards = [
    {
      title: 'Onde estamos',
      info: 'Av. Irmãos Pereira, 910',
      subInfo: 'Campo Mourão - PR',
      Icon: MapPin,
    },
    {
      title: 'Funcionamento',
      info: 'Terça a domingo',
      subInfo: '18h00 às 01h00',
      Icon: Clock,
    },
    {
      title: 'Informações',
      info: 'info@formulagrill.com',
      subInfo: '(44) 3434-4343',
      Icon: BookOpenText,
    },
  ]

  return (
    <section
      id="about"
      className={
        'grid grid-cols-1 place-items-center gap-4 bg-black bg-carbon p-5 brightness-100 lg:gap-20 lg:p-20 lg:px-10'
      }
    >
      <div className="grid w-full grid-cols-1 place-items-center gap-5 lg:flex lg:justify-evenly">
        {aboutCards.map((card, index) => (
          <AboutCards key={index} {...card} />
        ))}
      </div>
      <div className="grid grid-cols-1 place-items-center gap-4 lg:grid-cols-3 lg:gap-10">
        <Image
          src={AboutImage1}
          alt="About Image 1"
          className="aspect-square w-full max-w-96"
        />
        <div className="flex flex-col gap-3 text-center text-white">
          <h1 className="text-lg font-bold">Nossa história</h1>
          <span>
            Abrimos as portas em 2019 como uma pequena lanchonete temática de
            fórmula 1, como meros fãs de corrida e entusiastas da culinária
            mundial. em 2022, trocamos as peças, e hoje somos um grande
            restaurante reconhecido pela comunidade automobilística como um
            “must visit” do brasil.
          </span>
        </div>
        <Image
          src={AboutImage2}
          alt="About Image 2"
          className="aspect-square w-full max-w-96"
        />
      </div>
    </section>
  )
}

export default About
