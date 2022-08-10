import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { useRef, useState } from "react";

import { ButtonWithIcon } from "modules/ButtonWithIcon";
import { TextFieldWithIcon } from "modules/TextFieldWithIcon";
import { createUser } from "api/auth";
import { useNavigate } from "react-router-dom";

export function SignUpProcess() {
  const [fullNameInput, setFullNameInput] = useState<string>("");
  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");

  const navigate = useNavigate();

  const onSignUp = async () => {
    if (
      !/^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(emailInput) ||
      !emailInput ||
      !passwordInput ||
      !fullNameInput
    )
      return alert("Check validation");

    await createUser({
      email: emailInput,
      password: passwordInput,
      name: fullNameInput,
    });

    navigate("/verification", {
      state: {
        email: emailInput,
        password: passwordInput,
      },
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
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
          error={
            !/^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              emailInput
            ) && emailInput.length !== 0
          }
          label="Email Address"
          type="email"
        />
        <TextFieldWithIcon
          value={fullNameInput}
          onChange={(e) => setFullNameInput(e.target.value)}
          label="Full Name"
          type="text"
        />
        <TextFieldWithIcon
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
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
