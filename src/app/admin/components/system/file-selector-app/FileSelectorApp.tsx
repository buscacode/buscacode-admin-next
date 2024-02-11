'use client'
import styles from './style.module.css'
import { clsx } from 'clsx';
import { useFileSelector } from './useFileSelector';
import * as Tabs from '@radix-ui/react-tabs';
import FileListFieldApp from './sub-components/FileListFieldApp';
import { useState } from 'react';
import { TbDotsVertical } from "react-icons/tb";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { MdCreateNewFolder } from "react-icons/md";
import { MdNoteAdd } from "react-icons/md";

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
  const addNewFile = () => {
    console.log("Add new File");
  }
  const addNewDirectory = () => {
    console.log("Add new Directory");
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
              {/* <div className={styles.modal__more}> */}
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger asChild>
                    <div className={styles.modal__more}>
                      <TbDotsVertical />
                    </div>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Portal >
                    <DropdownMenu.Content className={styles.dropdownMenuContent} sideOffset={5}>
                      <DropdownMenu.Item className={styles.dropdownMenuItem}
                        onClick={addNewDirectory}
                      >
                        Agregar carpeta
                        <div className={styles.dropdownMenuItem__icon}>
                          <MdCreateNewFolder />
                        </div>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item className={styles.dropdownMenuItem}
                        onClick={addNewFile}
                      >
                        Agregar archivo
                        <div className={styles.dropdownMenuItem__icon}>
                          <MdNoteAdd />
                        </div>
                      </DropdownMenu.Item>

                      <DropdownMenu.Arrow className={styles.dropdownMenuArrow} />
                    </DropdownMenu.Content>

                  </DropdownMenu.Portal>
                </DropdownMenu.Root>
              {/* </div> */}
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
