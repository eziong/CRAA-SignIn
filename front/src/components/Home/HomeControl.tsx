import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { SubtitleLineType } from "type";
import { getSubtitle } from "api/vimeo";

export const HomeControl = ({ videoId }: { videoId: string }) => {
  const [subtitles, setSubtitles] = useState<
    (SubtitleLineType & { focus?: boolean })[]
  >([]);
  useEffect(() => {
    (async () => {
      getSubtitle(videoId).then((data) => {
        setSubtitles(data.data);
      });
    })();
  }, []);

  return (
    <Box width={480} maxHeight={"90vh"} overflow={"auto"}>
      {subtitles.map((line, index) => (
        <Box key={index}>
          <Typography
            style={line.focus ? { backgroundColor: "yellowgreen" } : {}}
          >
            {line.content}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
