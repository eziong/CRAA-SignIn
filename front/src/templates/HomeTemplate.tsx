import { Box } from "@mui/system";
import { Paper } from "@mui/material";

export function HomeTemplate({
  VideoComponent,
  ControlComponent,
}: {
  VideoComponent: JSX.Element;
  ControlComponent: JSX.Element;
}) {
  return (
    <Paper
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"50%"}
      >
        {VideoComponent}
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"50%"}
      >
        {ControlComponent}
      </Box>
    </Paper>
  );
}
