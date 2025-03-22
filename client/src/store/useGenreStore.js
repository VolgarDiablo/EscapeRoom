import { create } from "zustand";

const useGenreStore = create((set) => ({
  activeGenreName: null,
  setActiveGenreName: (name) => set({ activeGenreName: name }),
}));

export default useGenreStore;
