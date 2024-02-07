import { useContext, useState } from "react";
import { FileSelectorContext } from "./FileSelectorProvider";
import { FileEntity, FileSelectorType } from "./FileSelectorTypes";


type UseFileSelector = (isMultipleDefault?: boolean) => FileSelectorType
type ResolveFn = (value: FileEntity[] | FileEntity | null) => void

const controller = new AbortController();

export const useFileSelector: UseFileSelector = (isMultipleDefault = false) => {

  const [isOpen, changeIsOpen] = useState<boolean>(false);
  const [isMultiple, changeIsMultiple] = useState<boolean>(isMultipleDefault);
  const [selectedFiles, changeFileSelected] = useState<FileEntity | null>(null);
  const [resolveFn, changeResolveFn] = useState<ResolveFn | null>(null);

  const openFileSelector = async () => {

    return await new Promise<FileEntity[] | FileEntity | null>((resolve, reject) => {
      changeIsOpen(true)
      changeResolveFn(resolve)
      const fileSelector : FileEntity[] | FileEntity | null = {}
      //resolve(fileSelector)
      setInterval(()=>{
        console.log("Cerrando el  selector automaticamente:: >");

        resolve(fileSelector)
      }, 3000)
    })
  }

  const closeFileSelector = () => {
    if(resolveFn){
      resolveFn(null)
      changeResolveFn(null)
    }
    changeIsOpen(false)
  }

  return { isOpen, isMultiple, changeIsMultiple, openFileSelector, closeFileSelector };
}


export const useFileSelectorController: ()=>FileSelectorType = () => {
  const {isOpen,changeIsMultiple, closeFileSelector, isMultiple, openFileSelector} = useContext<FileSelectorType>(FileSelectorContext);

  return {isOpen,changeIsMultiple, closeFileSelector, isMultiple, openFileSelector}
}
