import { create } from "zustand";

type UserState = {
  currentUser: string;
  logged: boolean;
  logIn: (newUser: string) => void;
  logOut: () => void;
};

const userInfo = localStorage.getItem("loggedUserInfo");
const parsedUserInfo: { username: string } | null = userInfo
  ? JSON.parse(userInfo)
  : null;

export const useLoginStore = create<UserState>((set) => ({
  currentUser: parsedUserInfo ? parsedUserInfo.username : "",
  logged: parsedUserInfo ? true : false,
  logIn: (newUser: string) => set({ currentUser: newUser, logged: true }),
  logOut: () => set({ currentUser: "", logged: false }),
}));
