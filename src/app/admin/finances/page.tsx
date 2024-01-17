// 'use client'
import type { Metadata } from 'next';
import styles from './styles.module.css'
import { useLayoutStore } from '~/store/layout.store';

export const metadata: Metadata = {
  title: 'Finances | Buscauth',
  description: 'Sitio para las finanzas.',
}

const LoginPage = () => {
  // const { sidebarOpened } = useLayoutStore();
  // console.log("sidebarOpened: ", sidebarOpened);

  return (
    <div className={styles['button-estilo']}>
      <h1> Iniciar Sesión</h1>
      <button >click</button>
    </div>
  )
}

export default LoginPage;
