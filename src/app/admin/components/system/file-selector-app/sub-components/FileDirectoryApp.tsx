import { DirectoryEntity } from '../FileSelectorTypes';
import styles from '../style.module.css'
import clsx from "clsx";
import { PiFoldersFill } from "react-icons/pi";

type ComponentProps = {
  children?: React.ReactNode,
  className?: string | string[] | { [key: string]: boolean } | undefined,
  directoryItem: DirectoryEntity,
  onDoubleClick: (folderId: number) => void,
};

const FileDirectoryApp = ({children, className, directoryItem, onDoubleClick}: ComponentProps) => {
  return (
    <div className={clsx(styles.fileDirectoryApp, className )}
      onDoubleClick={()=>onDoubleClick(directoryItem.id)}
    >
      <div className={styles.fileDirectoryApp__content} >
        <div className={styles.fileDirectoryApp__icon}>
          <PiFoldersFill />
        </div>
        <div className={styles.fileDirectoryApp__name}>
          {directoryItem.name}
        </div>
      </div>
    </div>
  )
}

export default FileDirectoryApp
