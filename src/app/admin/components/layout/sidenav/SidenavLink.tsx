import Link from 'next/link';
import styles from './sidenav.module.css'
import { clsx } from 'clsx';
import { type IconType } from 'react-icons';

type ComponentProps = {
  children?: React.ReactNode,
  className?: string | string[] | { [key: string]: boolean } | undefined,
  path: string,
  icon: React.ReactNode,
  name: string,
  isShort: boolean,
  isActive?: boolean,
};

const SidenavLink = ({ children, className, path, icon, name, isShort, isActive = false }: ComponentProps) => {

  return (
    <div className={clsx(styles['sidenav-link'], className, {
      [styles['sidenav-link--short']]: isShort,
      [styles['sidenav-link--active']]: isActive,
    })}>
      <div className={styles['sidenav-link__wrapper']}>
        <Link className={styles['sidenav-link__link']} href={path}>
          <div className={styles['sidenav-link__element']}>
            <div className={styles['sidenav-link__element-icon']}>
              {icon}
            </div>
            <div className={styles['sidenav-link__element-text']}>
              {name}
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default SidenavLink;
