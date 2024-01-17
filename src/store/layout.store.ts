import { create } from 'zustand'

export type SidenavStatus = 'OPENED' | 'CLOSED';

export type State = {
  sidebarOpened: boolean
}

export type Actions = {
  toggleSidebar: (value?: boolean) => void

}

// Partial<LayoutStore>
const toggleSideBar = (state: State, value?: boolean)=> {
  let tempValue : boolean = !state.sidebarOpened;
  if(value) tempValue = value

  return {
    sidebarOpened: tempValue
  }
}

export const useLayoutStore = create<State & Actions>()((set) => ({
  sidebarOpened: true,
  toggleSidebar: (value) => set((state) => toggleSideBar(state, value)),
}))
