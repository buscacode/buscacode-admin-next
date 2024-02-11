import { useContext, useState } from "react";
import { FileSelectorContext } from "./FileSelectorProvider";
import { FileEntity, FileSelectorType } from "./FileSelectorTypes";


type UseFileSelector = (isMultipleDefault?: boolean) => FileSelectorType
type ResolveFn = (value: FileEntity[] | FileEntity | null) => void

//const controller = new AbortController();

/**
 * Generate the states to control the modal of the file selector.
 *
 * @param {boolean} isMultipleDefault - The default value for the 'isMultiple' state.
 *
 * @returns {FileSelectorType} An object with properties and functions to control the file selector modal.
 */
export const useFileSelectorController: UseFileSelector = (isMultipleDefault = false) => {

  const [isOpen, changeIsOpen] = useState<boolean>(false);
  const [isMultiple, changeIsMultiple] = useState<boolean>(isMultipleDefault);
  const [selectedFiles, changeFileSelected] = useState<FileEntity | null>(null);
  const [resolveFn, changeResolveFn] = useState<ResolveFn | null>(null);


  /**
   * Opens the file selector modal asynchronously.
   *
   * @returns {Promise<FileEntity[] | FileEntity | null>} A promise resolving to selected files or null.
   */
  const openFileSelector = async () => {

    return await new Promise<FileEntity[] | FileEntity | null>((resolve, reject) => {
      changeIsOpen(true)
      changeResolveFn(resolve)
      const fileSelector : FileEntity[] | FileEntity | null = null
      //resolve(fileSelector)
      setTimeout(()=>{
        console.log("Cerrando el  selector automaticamente:: >");

        resolve(fileSelector)
      }, 3000)
    })
  }


  /**
   * Closes the file selector modal and resolves the promise with null.
   */
  const closeFileSelector = () => {
    if(resolveFn){
      resolveFn(null)
      changeResolveFn(null)
    }
    changeIsOpen(false)
  }

  return { isOpen, isMultiple, changeIsMultiple, openFileSelector, closeFileSelector };
}


export const useFileSelector: ()=>FileSelectorType = () => {
  const {isOpen,changeIsMultiple, closeFileSelector, isMultiple, openFileSelector} = useContext<FileSelectorType>(FileSelectorContext);

  return {isOpen,changeIsMultiple, closeFileSelector, isMultiple, openFileSelector}
}
