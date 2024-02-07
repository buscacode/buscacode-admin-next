'use client'
import { createContext, useState } from "react";
import FileSelectorApp from './FileSelectorApp';
import { useFileSelector } from "./useFileSelector";
import { FileSelectorType } from "./FileSelectorTypes";

const defaultFileSelector:FileSelectorType = {
  isOpen: false,
  isMultiple: false,
  changeIsMultiple: () => {},
  openFileSelector: () => Promise.resolve(null),
  closeFileSelector: () => {},
}

// CREATE A CONTEXT
export const FileSelectorContext = createContext<FileSelectorType>(defaultFileSelector);


// CREATE A PROVIDER OF THE CONTEXT
export const FileSelectorProvider = ({children}: {children: React.ReactNode}) => {

  const {
    isOpen,
    openFileSelector,
    changeIsMultiple,
    closeFileSelector,
    isMultiple
  } = useFileSelector(false)

  console.log("Auqí debería cambiar algo: ", isOpen);



  return (
    <FileSelectorContext.Provider
      value={{isOpen, isMultiple, openFileSelector, changeIsMultiple, closeFileSelector }}
    >
      {children}
      <FileSelectorApp/>
    </FileSelectorContext.Provider>
  )
}
