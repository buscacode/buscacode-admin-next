import Image from 'next/image';
import styles from './header.module.css'
import { clsx } from 'clsx';
import Link from 'next/link';

type ComponentProps = {
  children?: React.ReactNode,
  className?: string | string[] | { [key: string]: boolean } | undefined
};

const HeaderApp = ({ children, className }: ComponentProps) => {

  return (
    <div className={ clsx(styles['header-app'], className) }>
      <div className={ styles['header-app__wrapper'] }>
        <Link href="/admin/finances">
          <div className={ styles['header-app__logo'] }>
            <Image src="/logo.svg" alt="" width={60} height={34}/>
            {/* <strong>BuscAdmin</strong> */}
          </div>
        </Link>
      </div>
    </div>
  )
}

export default HeaderApp;
