import { create } from "zustand";

interface GlobalState {
  isSideBarOpen: boolean;
  isUserMenuOpen: boolean;
  isAppearanceSelectOpen: boolean;
}

interface GlobalStateAction {
  setSideBarOpen: (isSideBarOpen: boolean) => void;
  setUserMenuOpen: (isUserMenuOpen: boolean) => void;
  setAppearanceSelectOpen: (isAppearanceSelectOpen: boolean) => void;
}

const useGlobalStateManagement = create<GlobalState & GlobalStateAction>()(
  (set) => ({
    isSideBarOpen: false,
    setSideBarOpen: (isSideBarOpen: boolean) => {
      set({ isSideBarOpen });
    },
    isUserMenuOpen: false,
    setUserMenuOpen: (isUserMenuOpen: boolean) => {
      set({ isUserMenuOpen });
    },
    isAppearanceSelectOpen: false,
    setAppearanceSelectOpen: (isAppearanceSelectOpen: boolean) => {
      set({ isAppearanceSelectOpen });
    },
  })
);

export default useGlobalStateManagement;
