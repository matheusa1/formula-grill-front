import AdminOverlay from '@/components/atoms/AdminOverlay'
import AdminHeader from '@/components/organisms/AdminHeader'
import AdminSidebar from '@/components/organisms/AdminSidebar'
import { SidebarContextProvider } from '@/context/AdminSidebarContext'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarContextProvider>
      <div className="flex flex-row bg-black">
        <aside className="m-0 h-screen w-fit p-0">
          <AdminOverlay />
          <AdminSidebar />
        </aside>
        <section className="flex max-h-screen flex-1 flex-row overflow-y-hidden bg-black lg:py-5 lg:pr-5">
          <div className="flex flex-1 flex-col overflow-hidden bg-white px-4 pt-3 lg:rounded-lg lg:px-12 lg:py-6">
            <AdminHeader />
            <div className="flex-1 overflow-y-auto ">{children}</div>
          </div>
        </section>
      </div>
    </SidebarContextProvider>
  )
}
