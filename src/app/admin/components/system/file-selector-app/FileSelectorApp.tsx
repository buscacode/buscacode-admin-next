'use client'
import styles from './style.module.css'
import { clsx } from 'clsx';
import { useFileSelector } from './useFileSelector';
import * as Tabs from '@radix-ui/react-tabs';
import FileListFieldApp from './sub-components/FileListFieldApp';
import { useState } from 'react';
import { TbDotsVertical } from "react-icons/tb";



type ComponentProps = {
  children?: React.ReactNode,
  className?: string | string[] | { [key: string]: boolean } | undefined,
  isOpen?: boolean,
};



const FileSelectorApp = ({ children, className}: ComponentProps) => {
  //const {isOpen = false, closeFileSelector } = useFileSelector()
  const fileSelectorController = useFileSelector();
  const [currentFolderId, changeCurrentFolderId] = useState(0)

  const closeModal = () => {
    fileSelectorController.closeFileSelector()
  }
  return (
    <div className={clsx( styles.fileSelectorApp, className, {
      [styles['fileSelectorApp--active']]: fileSelectorController.isOpen
    })}>
      <div className={styles.modal__backguard}>
      </div>
      <div className={styles.modal}>
        <div className={styles.modal__body}>
          <div className={styles.modal__head}>
            <h3 className={styles.modal__title}>
              Selecciona tu archivo
              <div className={styles.modal__more}>
                <TbDotsVertical />
              </div>
            </h3>
            <button
              className={styles.modal__close}
              onClick={closeModal}
            >⨯</button>
          </div>
          <div className={styles.modal__content}>
            <Tabs.Root className={styles.tabs} defaultValue="tab1">
              <Tabs.List className={styles.tabs__list}>
                <Tabs.Trigger className={styles.tabs__trigger} value="tab1">
                  Mis archivos
                </Tabs.Trigger>

              </Tabs.List>
              <Tabs.Content className={styles.tabs__content} value="tab1">
                <FileListFieldApp currentFolderId={currentFolderId}>

                </FileListFieldApp>
              </Tabs.Content>

            </Tabs.Root>
          </div>
          <div className={styles.modal__actions}>
            <div className={styles.actions}>
              <button >Aceptar</button>
              <button >Cancelar</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )

}

export default FileSelectorApp
