import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { SubtitleLineType } from "type";
import { getSubtitle } from "api/vimeo";
import { useRecoilState } from "recoil";
import { vimeoControlState } from "recoil/vimeo";

export const HomeControl = ({ videoId }: { videoId: string }) => {
  const [vimeoControl, setVimeoControl] = useRecoilState(vimeoControlState);
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

  useEffect(() => {
    setSubtitles(
      subtitles.map((subtitleLine) => {
        const startTime = parseTimeStringToSeconds(
          subtitleLine?.startTime ? subtitleLine.startTime : ""
        );
        const endTime = parseTimeStringToSeconds(
          subtitleLine?.endTime ? subtitleLine.endTime : ""
        );
        if (
          startTime < vimeoControl.playingTime &&
          endTime > vimeoControl.playingTime
        ) {
          return { ...subtitleLine, focus: true };
        }
        return { ...subtitleLine, focus: false };
      })
    );
  }, [vimeoControl.playingTime, vimeoControl.isPlaying]);

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

const parseTimeStringToSeconds = (timeString: string) => {
  if (!timeString) return 0;
  const [hours, minutes, seconds] = timeString
    .split(":")
    .map((t, idx) => (idx === 2 ? Number(t.replace(",", ".")) : Number(t)));
  return 60 * 60 * hours + 60 * minutes + seconds;
};
