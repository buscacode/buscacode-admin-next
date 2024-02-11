'use client'

import { useCallback, useContext, useEffect, useState } from 'react';
import styles from '../style.module.css'
import { clsx } from 'clsx';
import { DirectoryEntity, FileEntity } from '../FileSelectorTypes';
import { http } from '~/tools/http.tool';
import FileDirectoryApp from './FileDirectoryApp';

type ComponentProps = {
  children?: React.ReactNode,
  className?: string | string[] | { [key: string]: boolean } | undefined,
  currentFolderId?: number,
};


const FileListFieldApp = ({ children, className, currentFolderId}: ComponentProps) => {
  const [isLoading, changeIsLoading] = useState(true);
  const [fileList, changeFileList] = useState<FileEntity[]>([])
  const [directoryList, changeDirectoryList] = useState<DirectoryEntity[]>([])

  const getDirectoriesData = useCallback(
    async() => {
      if(currentFolderId == null || currentFolderId) {
        return changeFileList([])
      }

      let endpointFolders = `/folders/${currentFolderId}/folders`
      let endpointFiles = `/folders/${currentFolderId}/files`
      try {
        changeIsLoading(true)
        const [responseFolders, responseFiles] = await Promise.all([
          http(endpointFolders),
          http(endpointFiles),
        ])
        const [bodyFolders, bodyFiles]: [DirectoryEntity[], FileEntity[]] = await Promise.all([
          responseFolders.json(),
          responseFiles.json(),
        ])
        changeDirectoryList(state => state = bodyFolders)
        changeFileList(state => state = bodyFiles)

      } catch (error) {
        console.log("Error en filelistfield app", error);
      } finally {
        changeIsLoading(false)
      }
    },
    [currentFolderId]
  )

  useEffect(()=>{
    getDirectoriesData()
  }, [getDirectoriesData])

  const cambiarFolder = (folderId: number) => {
    console.log("debería cambiar de id: ", folderId);

  }

  return (
    <div className={clsx( styles.fileListFieldApp, className )}>
      <div className={styles.fileListFieldApp__container}>
        {
          directoryList.map((directory, index) => (
            <FileDirectoryApp
              key={index}
              directoryItem={directory}
              onDoubleClick={cambiarFolder}
            />
          ))
        }

      </div>
    </div>
  )
}

export default FileListFieldApp;
