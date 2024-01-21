import Link from 'next/link';
import styles from './sidenav.module.css'
import { clsx } from 'clsx';

type ComponentProps = {
  children?: React.ReactNode,
  className?: string | string[] | { [key: string]: boolean } | undefined,
  title?: string,
  enableWrap?: boolean,
  icon: React.ReactNode,
  isShort: boolean,
};

const SidenavGroup = ({ children, className, title = 'Group', icon, isShort, enableWrap = true, }: ComponentProps) => {
  if(!enableWrap) {
    return (
      <div className={clsx(styles['sidenav-group'], className, {
        [styles['sidenav-group--short']]: isShort
      })}>
        {children}
      </div>
    )
  }

  return (
    <div className={clsx(styles['sidenav-group'], className, {
      [styles['sidenav-group--short']]: isShort
    })}>
      <div className={styles['sidenav-group__wrapper']}>
        <div className={styles['sidenav-group__title']}>
          <div className={styles['sidenav-group__icon']}>
            { icon }
          </div>
          <span>
            {title}
          </span>
        </div>
        <div className={styles['sidenav-group__list']}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default SidenavGroup;
