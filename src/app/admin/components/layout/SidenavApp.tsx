import styles from './sidenav.module.css'
import { clsx } from 'clsx';

type ComponentProps = {
  children?: React.ReactNode,
  className?: string | string[] | { [key: string]: boolean } | undefined
};

const SidenavApp = ({ children, className }: ComponentProps) => {

  return (
    <div className={styles['sidenav-app']}>
      <h1> Iniciar Sesión </h1>
      <button >click</button>
    </div>
  )
}

export default SidenavApp;
