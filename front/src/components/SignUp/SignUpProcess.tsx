import { Card, CardContent, CardHeader, Typography } from "@mui/material";

import { ButtonWithIcon } from "modules/ButtonWithIcon";
import { TextFieldWithIcon } from "modules/TextFieldWithIcon";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export function SignUpProcess() {
  const FullNameInputRef = useRef<HTMLInputElement>(null);
  const EmailInputRef = useRef<HTMLInputElement>(null);
  const MobileInputRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const goSignIn = () => {
    navigate("/");
  };

  return (
    <Card elevation={0} style={{ width: 360 }}>
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
          inputRef={FullNameInputRef}
          label="Full Name"
          type="email"
        />
        <TextFieldWithIcon
          inputRef={EmailInputRef}
          label="Email Address"
          type="password"
        />
        <TextFieldWithIcon
          inputRef={MobileInputRef}
          label="Mobile No"
          type="tel"
        />
      </CardContent>
      <CardContent style={{ paddingTop: 0, paddingBottom: 24 }}>
        <Typography>
          <span>You are agreeing to the</span>
          <span style={{ color: "#1976d2" }}>Terms of Services </span>
          <span>and </span>
          <span style={{ color: "#1976d2" }}>Privacy Policy</span>
        </Typography>
      </CardContent>
      <CardContent>
        <ButtonWithIcon
          text="Get Started"
          variant="contained"
          onClick={() => {}}
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
          <span style={{ color: "#1976d2" }} onClick={goSignIn}>
            Sign in
          </span>
        </Typography>
      </CardContent>
    </Card>
  );
}
