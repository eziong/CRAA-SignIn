import { InputAdornment, TextField } from "@mui/material";

import { useState } from "react";

export function TextFieldWithIcon({
  defaultValue,
  value = "",
  onChange,
  helperText,
  error,
  inputRef,
  label,
  type,
  icon,
}: {
  defaultValue?: string;
  value?: string;
  onChange?: (e: any) => void;
  helperText?: string;
  error?: boolean;
  inputRef?: React.Ref<any>;
  label: string;
  type: string;
  icon?: JSX.Element;
}) {
  const [focused, setFocused] = useState<boolean>(false);

  return (
    <TextField
      defaultValue={defaultValue}
      value={value}
      helperText={helperText}
      error={error}
      inputRef={inputRef}
      label={label}
      type={type}
      onChange={onChange}
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
