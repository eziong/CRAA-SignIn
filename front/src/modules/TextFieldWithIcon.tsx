import { InputAdornment, TextField } from "@mui/material";

import { useState } from "react";

export function TextFieldWithIcon({
  defaultValue = "",
  inputRef,
  label,
  type,
  icon,
}: {
  defaultValue?: string;
  inputRef: React.Ref<any>;
  label: string;
  type: string;
  icon?: JSX.Element;
}) {
  const [focused, setFocused] = useState<boolean>(false);

  return (
    <TextField
      defaultValue={defaultValue}
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
            style={{ color: focused ? "#1976d2" : "grey" }}
          >
            {icon}
          </InputAdornment>
        ),
      }}
    />
  );
}
