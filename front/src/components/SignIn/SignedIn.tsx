import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";

import { ButtonWithIcon } from "modules/ButtonWithIcon";
import LogoImage from "assets/craa.webp";
import { useAuthentication } from "hooks/auth";
import { useRoute } from "hooks/route";

export const SignedIn = () => {
  const { onLogOut } = useAuthentication();
  const { goHomePage, goSignUpPage } = useRoute();

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
          height: 150,
          justifyContent: "space-between",
          paddingBottom: 100,
        }}
      >
        <ButtonWithIcon
          text="Go to home"
          onClick={goHomePage}
          variant="contained"
        />
        <ButtonWithIcon
          text="Logout"
          variant="contained"
          onClick={onLogOut}
          style={{ backgroundColor: "#2222ff" }}
        />
      </CardContent>
      <CardContent style={{ paddingTop: 0, paddingBottom: 0 }}>
        <Typography>
          <span>Create new account? </span>
          <span
            className="text-link"
            onClick={goSignUpPage}
            style={{ fontWeight: 550 }}
          >
            Sign Up
          </span>
        </Typography>
      </CardContent>
    </Card>
  );
};
