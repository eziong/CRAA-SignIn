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
    <div>
      <div>
        <span>Sign up</span>
      </div>
      <div>
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
      </div>
      <div>
        <span>You are agreeing to the</span>
        <span>Terms fo Services</span>
        <span>and</span>
        <span>Privacy Policy</span>
      </div>
      <div>
        <ButtonWithIcon
          text="Get Started"
          variant="contained"
          onClick={() => {}}
        />
      </div>
      <div>
        <span>Already a member?</span>
        <span onClick={goSignIn}>Sign in</span>
      </div>
    </div>
  );
}
