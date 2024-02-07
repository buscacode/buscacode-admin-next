export type FileEntity = {

}

export type FileSelectorType = {
  isOpen: boolean,
  isMultiple: boolean,
  changeIsMultiple: (isMultiple: boolean) => void,
  openFileSelector: () => Promise<FileEntity[] | FileEntity | null>,
  closeFileSelector: () => void
}
