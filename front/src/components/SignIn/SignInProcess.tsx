import { AlternateEmail, LockOutlined } from "@mui/icons-material";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { getStorage, setStorage } from "utils/storage";
import { useRef, useState } from "react";

import { Box } from "@mui/system";
import { ButtonWithIcon } from "modules/ButtonWithIcon";
import { GoogleLoginButton } from "./GoogleLoginButton";
import LogoImage from "assets/craa.webp";
import { TextFieldWithIcon } from "modules/TextFieldWithIcon";
import { useNavigate } from "react-router-dom";

export function SignInProcess() {
  const [emailInput, setEmailInput] = useState<string>(
    getStorage("lastLogin") ? getStorage("lastLogin") + "" : ""
  );
  const [passwordInput, setPasswordInput] = useState<string>("");

  const rememberMeRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const onSignIn = () => {
    if (!/^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(emailInput))
      return;
    if (!emailInput || !passwordInput) return;
    if (rememberMeRef.current?.checked) {
      setStorage("lastLogin", emailInput);
    }
    navigate("/verification", {
      state: {
        email: emailInput,
        password: passwordInput,
      },
    });
  };

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
            value={emailInput}
            error={
              !/^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                emailInput
              ) && emailInput.length !== 0
            }
            onChange={(e) => setEmailInput(e.target.value)}
            label="Email"
            type="email"
            icon={<AlternateEmail />}
          />
          <TextFieldWithIcon
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
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
              ref={rememberMeRef}
              id="rememberMe"
              type="checkbox"
              style={{ transform: "scale(1.3)" }}
            />
            <label htmlFor="rememberMe">Remember Me</label>
          </Typography>
          <Typography className="text-link">
            <span
              onClick={() => {
                navigate("/passwordRecovery");
              }}
            >
              Recovery Password
            </span>
          </Typography>
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
          onClick={onSignIn}
          style={{ backgroundColor: "#2222ff" }}
        />
        <GoogleLoginButton onClick={onSignIn} />
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
