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
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="bg-blue-500 flex-1">{children}</main>
      <footer className="bg-yellow-500">footer</footer>
    </div>
  )
}

export default HomeLayout
