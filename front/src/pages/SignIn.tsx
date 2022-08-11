import { SignInImage, SignInProcess } from "components/SignIn";

import { AuthTemplate } from "templates/AuthTemplate";
import { SignedIn } from "components/SignIn/SignedIn";
import { useRecoilValue } from "recoil";
import { verifiedState } from "recoil/auth";

export function SignIn() {
  const isVerified = useRecoilValue(verifiedState);

  return (
    <AuthTemplate
      ImageComponent={<SignInImage />}
      ProcessComponent={isVerified ? <SignedIn /> : <SignInProcess />}
    />
  );
}
