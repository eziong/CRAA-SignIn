import { useCallback, useEffect } from "react";

import { useRecoilState } from "recoil";
import { vimeoControlState } from "recoil/vimeo";

export const useVimeo = ({ videoId }: { videoId: string }) => {
  const [vimeoControl, setVimeoControl] = useRecoilState(vimeoControlState);

  const playing = useCallback(() => {
    // const _playing = setInterval(() => {
    //   setVimeoControl(prev => ({
    //     playingTime:prev.playingTime + 1
    //   }))
    // },1000)
  }, [vimeoControl.isPlaying]);

  useEffect(() => {
    if (vimeoControl.isPlaying) {
    }
  }, [vimeoControl.isPlaying]);

  const play = () => {};
  const pause = () => {};
  const stop = () => {};
};
