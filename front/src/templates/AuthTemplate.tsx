import { Box } from "@mui/system";
import { Paper } from "@mui/material";

export function AuthTemplate({
  ImageComponent,
  ProcessComponent,
}: {
  ImageComponent: JSX.Element;
  ProcessComponent: JSX.Element;
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
        {ImageComponent}
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"50%"}
      >
        {ProcessComponent}
      </Box>
    </Paper>
  );
}
