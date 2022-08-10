import { AlternateEmail, LockOutlined } from "@mui/icons-material";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";

import { Box } from "@mui/system";
import { ButtonWithIcon } from "modules/ButtonWithIcon";
import LogoImage from "assets/craa.webp";
import { TextFieldWithIcon } from "modules/TextFieldWithIcon";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export function SignInProcess() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const goSignUp = () => {
    navigate("/signUp");
  };

  return (
    <Card elevation={0} style={{ width: 360 }}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <img src={LogoImage} width={85} height={80} />
      </Box>
      <CardHeader
        title="Hello Again!"
        subheader={
          "Aliquam condimentum tempor ultricies. Nam nec turpis ut neque finibus eleifend vitae pretium dui."
        }
        style={{ textAlign: "center", paddingBottom: 40 }}
        titleTypographyProps={{ fontSize: 34, fontWeight: 500 }}
      />
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          height: 138,
          justifyContent: "space-between",
        }}
      >
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
      </CardContent>
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          height: 100,
          justifyContent: "space-between",
          paddingBottom: 100,
        }}
      >
        <ButtonWithIcon text="Login" variant="contained" onClick={() => {}} />
        <ButtonWithIcon
          text="Sign in with Google"
          variant="outlined"
          onClick={() => {}}
        />
      </CardContent>
      <CardContent style={{ paddingTop: 0, paddingBottom: 0 }}>
        <Typography>
          <span>Don't have an account yet? </span>
          <span style={{ color: "#1976d2" }} onClick={goSignUp}>
            Sign Up
          </span>
        </Typography>
      </CardContent>
    </Card>
  );
}
