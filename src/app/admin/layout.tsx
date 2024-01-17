//'use client'

import type { Metadata } from 'next';
import Image from 'next/image'
//import { Encode_Sans_Expanded } from 'next/font/google';
import './admin.global.css'
// import { useLayoutStore } from '~/store/layout.store';
import { clsx } from 'clsx';
import HeaderApp from './components/layout/HeaderApp';

//const font = Encode_Sans_Expanded({ weight: '700', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Admin | Buscauth',
  description: 'Sitio raiz del admin.',
}


const AdminLayout = ({ children, }: { children: React.ReactNode }) => {

  //const sidebarOpened = useLayoutStore(state => state.sidebarOpened)
  // const { sidebarOpened } = useLayoutStore();
  //console.log("sidebarOpened: ", sidebarOpened);

  return (
    <div
      className={clsx('admin-layout',
        {
          hola : true,
        }
      )}
    >
      <HeaderApp className="asdf" />

      <div >
        {children}
      </div>
    </div>
  )
}

export default AdminLayout;
