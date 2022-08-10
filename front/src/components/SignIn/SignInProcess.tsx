import { AlternateEmail, LockOutlined } from "@mui/icons-material";

import { ButtonWithIcon } from "modules/ButtonWithIcon";
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
        <ButtonWithIcon text="Login" variant="contained" onClick={() => {}} />
        <ButtonWithIcon
          text="Sign in with Google"
          variant="outlined"
          onClick={() => {}}
        />
      </div>
      <div>
        <span>Don't have an account yet?</span>
        <span onClick={goSignUp}>Sign Up</span>
      </div>
    </div>
  );
}
