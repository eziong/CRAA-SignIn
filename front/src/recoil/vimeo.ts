import { VimeoControlType } from "type";
import { atom } from "recoil";

export const vimeoControlState = atom<VimeoControlType>({
  key: "vimeoControlState",
  default: {
    playingTime: 0,
    isPlaying: false,
  },
});
