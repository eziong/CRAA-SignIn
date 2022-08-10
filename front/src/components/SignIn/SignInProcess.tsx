import { AlternateEmail, LockOutlined } from "@mui/icons-material";
import { Button, InputAdornment, TextField } from "@mui/material";
import { useEffect, useRef } from "react";

import { TextFieldWithIcon } from "modules/TextFieldWithIcon";
import { useState } from "react";

export function SignInProcess() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <div>
        <span>Hello Again!</span>
        <br />
        <span>something</span>
      </div>
      <div>
        <TextFieldWithIcon
          inputRef={emailInputRef}
          label="Email"
          type="email"
          icon={<AlternateEmail />}
        />
        <TextFieldWithIcon
          inputRef={passwordInputRef}
          label="Password"
          type="password"
          icon={<LockOutlined />}
        />
      </div>
      <div>
        <Button />
        <Button />
      </div>
    </div>
  );
}
