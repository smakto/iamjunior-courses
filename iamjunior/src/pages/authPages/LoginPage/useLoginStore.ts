import { create } from "zustand";

type UserState = {
  currentUser: { name: string; email: string };
  logged: boolean;
  logIn: (newUser: { name: string; email: string }) => void;
  logOut: () => void;
};

const userInfo = localStorage.getItem("loggedUserInfo");
const parsedUserInfo = userInfo ? JSON.parse(userInfo) : null;

export const useLoginStore = create<UserState>((set) => ({
  currentUser: parsedUserInfo
    ? { name: parsedUserInfo.name, email: parsedUserInfo.email }
    : { name: "", email: "" },
  logged: parsedUserInfo ? true : false,
  logIn: (newUser: { name: string; email: string }) =>
    set({
      currentUser: { name: newUser.name, email: newUser.email },
      logged: true,
    }),
  logOut: () => set({ currentUser: { name: "", email: "" }, logged: false }),
}));
