import styles from './header.module.css'
import { clsx } from 'clsx';

type ComponentProps = {
  children?: React.ReactNode,
  className?: string | string[] | { [key: string]: boolean } | undefined
};

const HeaderApp = ({ children, className }: ComponentProps) => {

  return (
    <div className={ clsx(styles['header-app'], className) }>
      ss
      <div className={ styles['header-app__wrapper'] }>
dd
      </div>
    </div>
  )
}

export default HeaderApp;
