import { VimeoControlType } from "type";
import { atom } from "recoil";

export const vimeoControlState = atom<VimeoControlType>({
  key: "vimeoControlState",
  default: {
    playingTime: null,
    isPlaying: false,
  },
});
