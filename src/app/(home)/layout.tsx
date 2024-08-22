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
      <main className="flex-1 bg-blue-500">{children}</main>
      <footer className="bg-yellow-500">footer</footer>
    </div>
  )
}

export default HomeLayout
