import { create } from "zustand";

export const useLoginStore = create((set) => ({
  currentUser: "",
  logIn: (newUser) => set({ currentUser: newUser }),
}));

// loggedIn: false,
// logIn: (newUser) => set({ currentUser: newUser, loggedIn: true }),
// logOut: () => set({ currentUser: "", loggedIn: false }),
