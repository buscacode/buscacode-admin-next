'use client'
import type { Metadata } from 'next';
import styles from './styles.module.css'
import {clsx} from 'clsx';

// export const metadata: Metadata = {
//   title: 'Finances | Buscauth',
//   description: 'Sitio para las finanzas.',
// }

const GastosFinancePage = () => {

  return (
    <div className={clsx(styles['finance-gastos-page'], 'page')}>
      <div>
        Gastos page
      </div>
    </div>
  )
}

export default GastosFinancePage;
