import Footer from '@/components/organisms/Footer'
import { Header } from '@/components/organisms/Header'
import { Metadata } from 'next'
import { FC } from 'react'

export const metadata: Metadata = {
  title: 'Formula Grill',
  description: 'Reserve uma mesa já!',
}

const HomeLayout: FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-black">{children}</main>
      <Footer />
    </div>
  )
}

export default HomeLayout
