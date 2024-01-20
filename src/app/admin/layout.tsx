'use client'

//import Image from 'next/image'
import './admin.global.css'
import { useLayoutStore } from '~/store/layout.store';
import { clsx } from 'clsx';
import HeaderApp from './components/layout/HeaderApp';
import SidenavApp from './components/layout/SidenavApp';
import { useState } from 'react';

//const font = Encode_Sans_Expanded({ weight: '700', subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Admin | Buscauth',
//   description: 'Sitio raiz del admin.',
// }


const AdminLayout = ({ children, }: { children: React.ReactNode }) => {

  //const sidebarOpened = useLayoutStore(state => state.sidebarOpened)
  const { isSidebarOpened, toggleSidebar } = useLayoutStore();
  console.log("sidebarOpened: ", isSidebarOpened);

  const toggleIsOpen = () => {
    toggleSidebar()
  }

  return (
    <div
      className={clsx('admin-layout',
        {
          hola : true,
        }
      )}
    >
      <div
        className={clsx('admin-layout__sidenav',
          {
            active: isSidebarOpened
          }
        )}
      >
        <SidenavApp className={clsx({active: isSidebarOpened})}/>
      </div>

      <div className={clsx('admin-layout__content',
          {
            active: isSidebarOpened
          }
        )}
      >
        <div className="admin-layout__header">
          <HeaderApp className="" />
        </div>
        <main className="admin-layout__main">
          {children}
        </main>
      </div>
    </div>
  )
}

export default AdminLayout;
