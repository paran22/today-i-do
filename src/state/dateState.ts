import { atom } from "recoil";

export const dateState = atom<Date>({
  key: "date",
  default: new Date(),
});
