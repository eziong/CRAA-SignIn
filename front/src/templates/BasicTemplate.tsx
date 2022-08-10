import { Box, Paper } from "@mui/material";

export function BasicTemplate({ component }: { component: JSX.Element }) {
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
        width={"100%"}
        height={"100%"}
      >
        {component}
      </Box>
    </Paper>
  );
}
