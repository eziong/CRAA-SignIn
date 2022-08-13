import Vimeo from "@u-wave/react-vimeo";
import { useRecoilState } from "recoil";
import { vimeoControlState } from "recoil/vimeo";

export const VimeoPlayer = ({ videoId }: { videoId: string }) => {
  const [vimeoControl, setVimeoControl] = useRecoilState(vimeoControlState);

  return (
    <div>
      <Vimeo
        video={videoId}
        width={480}
        onTimeUpdate={({ seconds }) =>
          setVimeoControl({
            playingTime: seconds,
            isPlaying: true,
          })
        }
        onPause={() =>
          setVimeoControl((prev) => ({ ...prev, isPlaying: false }))
        }
      />
    </div>
  );
};
