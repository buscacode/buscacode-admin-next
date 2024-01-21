import Image from 'next/image';
import styles from './header.module.css'
import { clsx } from 'clsx';
import Link from 'next/link';
import { FaUserSecret } from "react-icons/fa6";

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
            {/* <Image src="/logo.svg" alt="" width={60} height={34}/> */}
            {/* <strong>BuscAdmin</strong> */}
            {/* https://react-icons.github.io/react-icons/search/#q=user */}
            {/* <FaUserSecret color='green'/> */}
          </div>
        </Link>
      </div>
    </div>
  )
}

export default HeaderApp;
