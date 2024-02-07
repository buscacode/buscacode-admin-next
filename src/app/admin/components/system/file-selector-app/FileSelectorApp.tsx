'use client'
import { useContext, useState } from 'react';
import styles from './style.module.css'
import { clsx } from 'clsx';
import { useFileSelector, useFileSelectorController } from './useFileSelector';
import { FileSelectorType } from './FileSelectorTypes';

type ComponentProps = {
  children?: React.ReactNode,
  className?: string | string[] | { [key: string]: boolean } | undefined,
  isOpen?: boolean,
};



const FileSelectorApp = ({ children, className}: ComponentProps) => {
  //const {isOpen = false, closeFileSelector } = useFileSelector()
  const fileSelectorController = useFileSelectorController();
  return (
    <div className={clsx( styles.fileSelectorApp, className, {
      [styles['fileSelectorApp--active']]: fileSelectorController.isOpen
    })}>
      <div className={styles.modal__backguard}>

        <div className={styles.modal}>
          <div className={styles.modal__body}>
            mi modal

            <button onClick={()=>fileSelectorController.closeFileSelector()}> Cerrar modal</button>
          </div>
        </div>

      </div>
    </div>
  )

}

export default FileSelectorApp
