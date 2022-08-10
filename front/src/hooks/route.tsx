import { tokenState, verifiedState, verifyLoadingState } from "recoil/auth";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

export const useVerificationRoute = () => {
  const isVerified = useRecoilValue(verifiedState);
  const isLoading = useRecoilValue(verifyLoadingState);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) return;
    if (isVerified) return navigate("/");
    navigate("/signIn");
  }, [isVerified, isLoading]);
};
