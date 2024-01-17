'use client'
import styles from './styles.module.css'
import { useLayoutStore } from '~/store/layout.store';

const LoginPage = () => {
  const { sidebarOpened } = useLayoutStore();
  console.log("sidebarOpened: ", sidebarOpened);

  return (
    <div className={styles['button-estilo']}>
      <h1> Iniciar Sesión {sidebarOpened}</h1>
      <button >click</button>
    </div>
  )
}

export default LoginPage;
