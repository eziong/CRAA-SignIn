import Vimeo from "@u-wave/react-vimeo";

export const VimeoPlayer = ({ videoId }: { videoId: string }) => {
  return (
    <div>
      <Vimeo video={videoId} width={480} />
    </div>
  );
};
