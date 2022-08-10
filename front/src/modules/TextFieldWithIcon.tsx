import { InputAdornment, TextField } from "@mui/material";

import { useState } from "react";

export function TextFieldWithIcon({
  inputRef,
  label,
  type,
  icon,
}: {
  inputRef: React.Ref<any>;
  label: string;
  type: string;
  icon?: JSX.Element;
}) {
  const [focused, setFocused] = useState<boolean>(false);

  return (
    <TextField
      inputRef={inputRef}
      label={label}
      type={type}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      fullWidth={true}
      InputProps={{
        endAdornment: (
          <InputAdornment
            position="end"
            style={{ color: focused ? "blue" : "grey" }}
          >
            {icon}
          </InputAdornment>
        ),
      }}
    />
  );
}
