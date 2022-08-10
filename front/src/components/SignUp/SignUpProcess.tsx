import { Card, CardContent, CardHeader, Typography } from "@mui/material";

import { ButtonWithIcon } from "modules/ButtonWithIcon";
import { TextFieldWithIcon } from "modules/TextFieldWithIcon";
import { createUser } from "api/auth";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export function SignUpProcess() {
  const fullNameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const onSignUp = () => {
    if (
      !emailInputRef.current ||
      !passwordInputRef.current ||
      !fullNameInputRef.current
    )
      return;
    createUser({
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
      name: fullNameInputRef.current.value,
    });
  };

  const goSignIn = () => {
    navigate("/");
  };

  return (
    <Card elevation={0} style={{ width: 400 }}>
      <CardHeader
        title="Sign up"
        titleTypographyProps={{ fontWeight: 550 }}
        style={{ paddingBottom: 24 }}
      />
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          height: 220,
          justifyContent: "space-between",
        }}
      >
        <TextFieldWithIcon
          inputRef={emailInputRef}
          label="Email Address"
          type="email"
        />
        <TextFieldWithIcon
          inputRef={fullNameInputRef}
          label="Full Name"
          type="text"
        />
        <TextFieldWithIcon
          inputRef={passwordInputRef}
          label="Password"
          type="password"
        />
      </CardContent>
      <CardContent style={{ paddingTop: 0, paddingBottom: 24 }}>
        <Typography>
          <span>You are agreeing to the</span>
          <span className="text-link">Terms of Services </span>
          <span>and </span>
          <span className="text-link">Privacy Policy</span>
        </Typography>
      </CardContent>
      <CardContent>
        <ButtonWithIcon
          text="Get Started"
          variant="contained"
          onClick={onSignUp}
          style={{ backgroundColor: "#3333ee" }}
        />
      </CardContent>
      <CardContent
        style={{
          paddingTop: 0,
          paddingBottom: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography>
          <span>Already a member? </span>
          <span
            className="text-link"
            onClick={goSignIn}
            style={{ fontWeight: 550 }}
          >
            Sign in
          </span>
        </Typography>
      </CardContent>
    </Card>
  );
}
