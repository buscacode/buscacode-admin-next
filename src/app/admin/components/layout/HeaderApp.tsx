import styles from './header.module.css'
import { clsx } from 'clsx';

type ComponentProps = {
  children?: React.ReactNode,
  className?: string | string[] | { [key: string]: boolean } | undefined
};

const HeaderApp = ({ children, className }: ComponentProps) => {

  return (
    <div className={ clsx(styles['header-app'], className) }>
      <div className={ styles['header-app__wrapper'] }>
        El header
      </div>
    </div>
  )
}

export default HeaderApp;
