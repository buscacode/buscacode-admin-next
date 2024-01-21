// 'use client'
import Link from 'next/link';
import SidenavGroup from './SidenavGroup';
import * as Icons from './SidenavIcons';
import SidenavLink from './SidenavLink';
import styles from './sidenav.module.css'
import { clsx } from 'clsx';
import Image from 'next/image';
import { usePathname } from 'next/navigation'

type ComponentProps = {
  children?: React.ReactNode,
  className?: string | string[] | { [key: string]: boolean } | undefined,
  isShort: boolean,
  toggleSidenav?: (value?: boolean) => void,
};

type SidenavLinkType = {
  name: string
  path: string
  //icon: IconType
  icon: React.ReactNode,
}

type SidenavGroupType = {
  title: string,
  icon: React.ReactNode,
  linkElements: SidenavLinkType[]
}

type SidenavListType = SidenavGroupType[]

const SidenavInstances: SidenavListType = [
  {
    title: 'Finanzas',
    icon: <Icons.MoneyIcon />,
    linkElements: [
      {
        name: 'Armarios de ventas',
        path: '/admin/finances',
        icon: <Icons.FinancialSavingIcon />,
      },
      {
        name: 'Gastos',
        path: '/admin/finances/gastos',
        icon: <Icons.FiDownIcon />,
      },
    ]
  }
]


const SidenavApp = ({ children, className, isShort, toggleSidenav = ()=>{} }: ComponentProps) => {
  const pathname = usePathname()



  const RetractIcon = isShort ? Icons.RightDoubleIcon : Icons.LeftDoubleIcon

  return (
    <aside className={clsx( styles['sidenav-app'], className, {
      [styles['sidenav-app--short']] : isShort
    })}>
      <div className={styles['sidenav-app__wrapper']}>
        <div className={styles['sidenav-app__header']}>
          <div className={'comp-avatar'}>
            <Link href="/admin/finances">
              <div className={ styles['sidenav-app__avatar'] }>
                <Image src="/logo.svg" alt="" width={60} height={34}/>
              </div>
            </Link>
          </div>
        </div>

        <div className={styles['sidenav-app__content']}>{
          SidenavInstances.map(group => {
            return (
              <SidenavGroup
                key={group.title}
                title={group.title}
                icon={ group.icon }
                isShort={isShort}
              >{
                group.linkElements.map(linkElement => (
                  <SidenavLink
                    key={linkElement.name}
                    name={linkElement.name}
                    path={linkElement.path}
                    icon={linkElement.icon}
                    isShort={isShort}
                    isActive={pathname === linkElement.path}
                  />
                ))
              }</SidenavGroup>
            )
          })
        }</div>
        <div className={styles['sidenav-app__actions']}>
          <button
            className={'comp-button'}
            onClick={()=>toggleSidenav()}
          >
            <RetractIcon />
          </button>
        </div>
      </div>
    </aside>
  )
}

export default SidenavApp;


{/* <SidenavGroup
  title='Finanzas'
  icon={ <Icons.MoneyIcon /> }
  isShort={isShort}
>
  <SidenavLink
    name='Armarios de ventas'
    path='/admin/finances'
    icon={<Icons.FinancialSavingIcon /> }
    isShort={isShort}
    isActive={pathname == '/admin/finances'}
  />
  <SidenavLink
    name='Gastos'
    path='/admin/finances/gastos'
    icon={<Icons.FiDownIcon /> }
    isShort={isShort}
    isActive={pathname == '/admin/finances/gastos'}
  />
</SidenavGroup> */}
