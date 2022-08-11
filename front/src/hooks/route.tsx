import { tokenState, verifiedState, verifyLoadingState } from "recoil/auth";
import { useLocation, useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { useRecoilValue } from "recoil";

export const useVerificationRoute = () => {
  const isVerified = useRecoilValue(verifiedState);
  const isLoading = useRecoilValue(verifyLoadingState);
  const { goHomePage, goSignInPage } = useRoute();

  useEffect(() => {
    if (isLoading) return;
    if (isVerified) return goHomePage();
    goSignInPage();
  }, [isVerified, isLoading]);
};

export const useRoute = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const goHomePage = () => {
    if (pathname !== "/") navigate("/");
  };

  const goBackPage = () => {
    navigate(-1);
  };

  const goSignInPage = () => {
    if (pathname !== "signIn") navigate("/signIn");
  };

  const goSignUpPage = () => {
    if (pathname !== "/signUp") navigate("/signUp");
  };

  const goPasswordRecoveryPage = () => {
    if (pathname !== "/passwordRecovery") navigate("/passwordRecovery");
  };

  const goVerificationPage = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    if (pathname !== "/verification")
      navigate("/verification", {
        state: {
          email,
          password,
        },
      });
  };

  const goPath = (path: string) => {
    navigate(path);
  };

  return {
    goHomePage,
    goBackPage,
    goSignInPage,
    goSignUpPage,
    goVerificationPage,
    goPasswordRecoveryPage,
    goPath,
  };
};
