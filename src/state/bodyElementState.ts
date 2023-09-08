import { atom } from "recoil";

export const bodyElementState = atom<HTMLElement | null>({
  key: "body",
  default: null,
});
