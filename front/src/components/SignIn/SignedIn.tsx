import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { providerState, tokenState } from "recoil/auth";

import { ButtonWithIcon } from "modules/ButtonWithIcon";
import { GoogleLoginButton } from "./GoogleLoginButton";
import LogoImage from "assets/craa.webp";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

export const SignedIn = () => {
  const setToken = useSetRecoilState(tokenState);
  const setProvider = useSetRecoilState(providerState);

  const navigate = useNavigate();

  const onSignOut = () => {
    setToken("");
    setProvider("local");
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
        ></Box>
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
          text="Logout"
          variant="contained"
          onClick={onSignOut}
          style={{ backgroundColor: "#2222ff" }}
        />
        <GoogleLoginButton />
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
};
