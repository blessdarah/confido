import { atom } from "recoil";
import { User, emptyUser } from "../models/user.model";

export const userState = atom({
  key: "user",
});

export const userListState = atom({
  key: "userList",
  default: [
    {
      ...emptyUser,
    },
  ] as User[],
});
