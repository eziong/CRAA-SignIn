import { atom } from "recoil";

export const tokenState = atom<string>({
  key: "tokenState",
  default: "",
});

export const verifiedState = atom<boolean>({
  key: "verifiedState",
  default: true,
});

export const verifyLoadingState = atom<boolean>({
  key: "verifyLoadingState",
  default: true,
});

export const providerState = atom<"local" | "google">({
  key: "providerState",
  default: "local",
});
