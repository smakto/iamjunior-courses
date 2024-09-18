import { create } from "zustand";

const userInfo = JSON.parse(localStorage.getItem("loggedUserInfo"));

export const useLoginStore = create((set) => ({
  currentUser: userInfo ? userInfo.username : "",
  logged: userInfo ? true : false,
  logIn: (newUser) => set({ currentUser: newUser, logged: true }),
  logOut: () => set({ currentUser: "", logged: false }),
}));

// loggedIn: false,
// logIn: (newUser) => set({ currentUser: newUser, loggedIn: true }),
// logOut: () => set({ currentUser: "", loggedIn: false }),
