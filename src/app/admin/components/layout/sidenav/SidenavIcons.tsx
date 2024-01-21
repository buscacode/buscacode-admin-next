import styles from './sidenav.module.css'
import { clsx } from 'clsx';

//Icons
import { TbPigMoney } from "react-icons/tb";
import { FaTruckMonster } from "react-icons/fa";
import { FaTree } from "react-icons/fa6";
import { FiTrendingDown } from "react-icons/fi";
import { BsCashCoin } from "react-icons/bs";

import { FaAngleDoubleLeft, FaAngleDoubleRight  } from "react-icons/fa";

const iconNames = [
  'ahorro',
  'camion',
  'arbol',
] as const;

export type SidenavIconName = typeof iconNames[number];

type MyObject = {
  [K in typeof iconNames[number]]: string;
};

type ComponentProps = {
  children?: React.ReactNode,
  className?: string | string[] | { [key: string]: boolean } | undefined,
  color?: string,
  iconName: SidenavIconName,
};


export const FinancialSavingIcon = TbPigMoney
export const TruckIcon = FaTruckMonster
export const TreeIcon = FaTree
export const FiDownIcon = FiTrendingDown
export const MoneyIcon = BsCashCoin

export const LeftDoubleIcon = FaAngleDoubleLeft
export const RightDoubleIcon = FaAngleDoubleRight


// const SidenavIcon = ({ children, className }: ComponentProps) => {

//   return (
//     <div className={styles['sidenav-link']}>
//       <div className={styles['sidenav-link__wrapper']}>

//       </div>
//     </div>
//   )
// }

// export default SidenavIcon;
