'use client'
import type { Metadata } from 'next';
import styles from './styles.module.css'
import {clsx} from 'clsx';
import { useContext, useEffect, useState } from 'react';
import { FileSelectorContext } from '../../components/system/file-selector-app/FileSelectorProvider';
import { useFileSelectorController, useFileSelector } from '../../components/system/file-selector-app/useFileSelector';

// export const metadata: Metadata = {
//   title: 'Finances | Buscauth',
//   description: 'Sitio para las finanzas.',
// }

type Usu = {
  id:number,
  name: string,
  email: string
}

const GastosFinancePage = () => {

  //const fileSelector = useContext(FileSelectorContext)
  const [isOpen, changeIsOpen] = useState<boolean>(false);
  //const {toggleIsOpen} = useFileSelector();

  const fileSelector = useFileSelector();

  const openFileSelector = () => {
    changeIsOpen(!isOpen)
    fileSelector.openFileSelector()
    .then((file) => {
      console.log("Files ==> : ", file);

    })
  }

  return (
    <div className={clsx(styles['finance-gastos-page'], 'page')}>
      <button onClick={openFileSelector}>cambiar modal</button>
    </div>
  )
}

export default GastosFinancePage;
