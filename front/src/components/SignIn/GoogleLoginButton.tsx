import { IResolveParams, LoginSocialGoogle } from "reactjs-social-login";
import { providerState, tokenState } from "recoil/auth";

/* eslint-disable */
import { ButtonWithIcon } from "modules/ButtonWithIcon";
import GoogleLogo from "assets/googleLogo.svg";
import { useRoute } from "hooks/route";
import { useSetRecoilState } from "recoil";

export const GoogleLoginButton = () => {
  const setToken = useSetRecoilState(tokenState);
  const setProvider = useSetRecoilState(providerState);
  const { goHomePage, goSignInPage } = useRoute();

  const clientId =
    "535784911394-lsrues2ner417tlonvu9kk9c0cqrpbsm.apps.googleusercontent.com";

  const onResolve = ({ provider, data }: IResolveParams) => {
    setToken(data?.access_token ? data.access_token : "");
    setProvider("google");
    goHomePage();
  };

  const onReject = (data: any) => {
    setToken("");
    setProvider("local");
  };

  return (
    <LoginSocialGoogle
      client_id={clientId}
      onResolve={onResolve}
      onReject={onReject}
    >
      <ButtonWithIcon
        text="Sign in with Google"
        variant="outlined"
        onClick={() => {}}
        startIcon={<img src={GoogleLogo} width={32} height={32} />}
        style={{ color: "#333333", borderColor: "#333333" }}
      />
    </LoginSocialGoogle>
  );
};
