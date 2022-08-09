import { SignUpImage, SignUpProcess } from "components/SignUp";

import { AuthTemplate } from "templates/AuthTemplate";

export function SignUp() {
  return (
    <AuthTemplate
      ImageComponent={<SignUpImage />}
      ProcessComponent={<SignUpProcess />}
    />
  );
}
