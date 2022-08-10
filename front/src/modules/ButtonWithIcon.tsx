import { Button } from "@mui/material";

export function ButtonWithIcon({
  text,
  variant,
  style = {},
  startIcon,
  endIcon,
  onClick,
}: {
  text: string;
  variant: "contained" | "outlined";
  style?: React.CSSProperties;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  onClick: () => void;
}) {
  return (
    <Button
      variant={variant}
      fullWidth={true}
      onClick={onClick}
      style={{
        height: 52,
        textTransform: "none",
        borderRadius: 10,
        ...style,
        fontSize: 16,
      }}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {text}
    </Button>
  );
}
