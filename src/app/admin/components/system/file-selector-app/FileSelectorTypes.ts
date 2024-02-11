import { Nill, UserCreator } from "~/app/admin/types";



export type SubDirectoryEntity = {
  id: number,
  name: string,
  pathOfIds: string,
  folderFatherId: number,
  description: string,
  createdAt: string,
  updatedAt: string,
  deletedAt: string | undefined | null,
}

export type DirectoryEntity = {
  id: number,
  name: string,
  pathOfIds: string,
  folderFatherId: number,
  folderFather: SubDirectoryEntity,
  folders: SubDirectoryEntity[],
  description: string,
  createdBy: UserCreator,
  createdAt: string;
  updatedAt: string;
  deletedAt: string | Nill;
}

export type FileEntity = {
  id?: number;
  name: string;
  originalName: string;
  /**
   * @deprecated Se eliminará en algún futuro.
   */
  path?: string;
  absolutePath: string;
  extension: string;
  description: string;
  url?: string;
  typeFile?: string;
  folder: SubDirectoryEntity;
  createdBy: UserCreator;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | Nill;
}

export type FileSelectorType = {
  isOpen: boolean,
  isMultiple: boolean,
  changeIsMultiple: (isMultiple: boolean) => void,
  openFileSelector: () => Promise<FileEntity[] | FileEntity | null>,
  closeFileSelector: () => void
}
