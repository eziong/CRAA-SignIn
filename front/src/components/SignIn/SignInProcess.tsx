import { AlternateEmail, LockOutlined } from "@mui/icons-material";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";

import { Box } from "@mui/system";
import { ButtonWithIcon } from "modules/ButtonWithIcon";
import GoogleLogo from "assets/googleLogo.svg";
import LogoImage from "assets/craa.webp";
import { TextFieldWithIcon } from "modules/TextFieldWithIcon";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export function SignInProcess() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const rememberMeRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const goSignUp = () => {
    navigate("/signUp");
  };

  return (
    <Card elevation={0} style={{ width: 400 }}>
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
          paddingBottom: 50,
        }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          height={138}
          justifyContent="space-between"
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
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          paddingTop={2}
        >
          <Typography color={"#555555"}>
            <input
              id="rememberMe"
              type="checkbox"
              style={{ transform: "scale(1.3)" }}
            />
            <label htmlFor="rememberMe">Remember Me</label>
          </Typography>
          <Typography className="text-link">Recovery Password</Typography>
        </Box>
      </CardContent>
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          height: 120,
          justifyContent: "space-between",
          paddingBottom: 100,
        }}
      >
        <ButtonWithIcon
          text="Login"
          variant="contained"
          onClick={() => {}}
          style={{ backgroundColor: "#2222ff" }}
        />
        <ButtonWithIcon
          text="Sign in with Google"
          variant="outlined"
          onClick={() => {}}
          startIcon={<img src={GoogleLogo} width={32} height={32} />}
          style={{ color: "#333333", borderColor: "#333333" }}
        />
      </CardContent>
      <CardContent style={{ paddingTop: 0, paddingBottom: 0 }}>
        <Typography>
          <span>Don't have an account yet? </span>
          <span
            className="text-link"
            onClick={goSignUp}
            style={{ fontWeight: 550 }}
          >
            Sign Up
          </span>
        </Typography>
      </CardContent>
    </Card>
  );
}
