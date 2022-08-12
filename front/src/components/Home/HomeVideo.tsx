import { Box } from "@mui/material";
import { VimeoPlayer } from "./VimeoPlayer";

export const HomeVideo = ({ videoId }: { videoId: string }) => {
  return (
    <Box>
      <VimeoPlayer videoId={videoId} />
    </Box>
  );
};
