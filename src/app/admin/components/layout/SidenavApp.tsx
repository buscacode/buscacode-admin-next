import styles from './sidenav.module.css'
import { clsx } from 'clsx';

type ComponentProps = {
  children?: React.ReactNode,
  className?: string | string[] | { [key: string]: boolean } | undefined
};

const SidenavApp = ({ children, className }: ComponentProps) => {

  return (
    <aside className={styles['sidenav-app']}>
      <div className={styles['sidenav-app__wrapper']}>

      </div>
    </aside>
  )
}

export default SidenavApp;
