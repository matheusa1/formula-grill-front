'use client'

import { FC } from 'react'
import 'swiper/css'

import 'swiper/css/autoplay'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { carouselData } from './carouselData'
import Image from 'next/image'
const FoodCarousel: FC = () => {
  return (
    <section
      className={'my-10 flex h-screen max-h-[750px] bg-black'}
      id={'carousel'}
    >
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        loop
      >
        {carouselData.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={
                'relative flex h-full flex-col  items-center justify-center bg-cover bg-center bg-no-repeat'
              }
            >
              <Image
                alt={`carousel image ${index}`}
                src={item.image}
                className="absolute inset-0 z-10 size-full object-cover brightness-75"
              />
              <p className={'z-20 text-center text-3xl font-bold text-white'}>
                {item.text}
              </p>
            </div>
          </SwiperSlide>
        ))}
        ...
      </Swiper>
    </section>
  )
}

export default FoodCarousel
