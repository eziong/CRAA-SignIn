/* eslint-disable */
import { ButtonWithIcon } from "modules/ButtonWithIcon";
import GoogleLogin from "react-google-login";
import GoogleLogo from "assets/googleLogo.svg";

export const GoogleLoginButton = ({ onClick }: { onClick: () => void }) => {
  const clientId =
    "535784911394-lsrues2ner417tlonvu9kk9c0cqrpbsm.apps.googleusercontent.com";

  const onSuccess = (data: any) => {
    console.log(data);
  };

  const onFailure = (data: any) => {
    console.log(data);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      render={({ onClick }) => (
        <ButtonWithIcon
          text="Sign in with Google"
          variant="outlined"
          onClick={onClick}
          startIcon={<img src={GoogleLogo} width={32} height={32} />}
          style={{ color: "#333333", borderColor: "#333333" }}
        />
      )}
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
    />
  );
};
