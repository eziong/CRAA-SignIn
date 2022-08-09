import { SignInImage, SignInProcess } from "components/SignIn";

import { AuthTemplate } from "templates/AuthTemplate";

export function SignIn() {
  return (
    <AuthTemplate
      ImageComponent={<SignInImage />}
      ProcessComponent={<SignInProcess />}
    />
  );
}
