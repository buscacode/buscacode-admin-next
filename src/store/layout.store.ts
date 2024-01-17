import { create } from 'zustand'

export type SidenavStatus = 'OPENED' | 'CLOSED';

export type State = {
  isSidebarOpened: boolean
}

export type Actions = {
  toggleSidebar: (value?: boolean) => void

}

// Partial<LayoutStore>
const toggleSideBar = (state: State, value?: boolean)=> {
  let tempValue : boolean = !state.isSidebarOpened;
  if(value) tempValue = value

  return {
    isSidebarOpened: tempValue
  }
}

export const useLayoutStore = create<State & Actions>()((set) => ({
  isSidebarOpened: true,
  toggleSidebar: (value) => set((state) => toggleSideBar(state, value)),
}))
