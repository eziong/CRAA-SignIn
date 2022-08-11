import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  providerState,
  tokenState,
  verifiedState,
  verifyLoadingState,
} from "recoil/auth";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

import { Home } from "pages/Home";
import { NotFound } from "pages/NotFound";
import { PasswordRecovery } from "pages/PasswordRecovery";
import { SignIn } from "pages/SignIn";
import { SignUp } from "pages/SignUp";
import { Verification } from "pages/Verification";
import { verifyUserWithToken } from "api/auth";

export function Router() {
  const setIsVerified = useSetRecoilState(verifiedState);
  const setIsVerifyingLoading = useSetRecoilState(verifyLoadingState);
  const [token, setToken] = useRecoilState(tokenState);
  const [provider, setProvider] = useRecoilState(providerState);

  useEffect(() => {
    (async () => {
      if (token) {
        setIsVerifyingLoading(true);
        return (await verifyUserWithToken(token, provider)).data;
      }
      return false;
    })().then((isValidToken) => {
      setIsVerifyingLoading(false);
      if (isValidToken) return setIsVerified(true);
      else {
        setToken("");
        setProvider("local");
        return setIsVerified(false);
      }
    });
  }, [token]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/passwordRecovery" element={<PasswordRecovery />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/*" element={<NotFound path="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
