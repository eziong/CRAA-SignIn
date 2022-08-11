import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { readUser, updateUser } from "api/auth";
import { useRef, useState } from "react";

import { ButtonWithIcon } from "modules/ButtonWithIcon";
import { TextFieldWithIcon } from "modules/TextFieldWithIcon";
import { useRoute } from "hooks/route";

export function PasswordRecoveryProcess() {
  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [repeatPasswordInput, setRepeatPasswordInput] = useState<string>("");
  const { goHomePage, goSignInPage } = useRoute();

  const onChangePassword = async () => {
    if (passwordInput !== repeatPasswordInput)
      return alert("check your password");
    const user = (await readUser(emailInput)).data;
    if (user) {
      return updateUser({ email: emailInput, password: passwordInput }).then(
        () => goHomePage()
      );
    } else {
      return alert("not exist user");
    }
  };

  return (
    <Card elevation={0} style={{ width: 400 }}>
      <CardHeader
        title="Change password"
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
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
          label="Password"
          type="password"
        />
        <TextFieldWithIcon
          value={repeatPasswordInput}
          onChange={(e) => setRepeatPasswordInput(e.target.value)}
          error={
            passwordInput !== repeatPasswordInput &&
            repeatPasswordInput.length !== 0
          }
          label="Repeat Password"
          type="password"
        />
      </CardContent>
      <CardContent>
        <ButtonWithIcon
          text="Change Password"
          variant="contained"
          onClick={onChangePassword}
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
          <span>Go back to </span>
          <span
            className="text-link"
            onClick={goSignInPage}
            style={{ fontWeight: 550 }}
          >
            Sign in
          </span>
        </Typography>
      </CardContent>
    </Card>
  );
}
