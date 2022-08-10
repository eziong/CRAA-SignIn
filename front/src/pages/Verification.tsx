import { useLocation, useNavigate } from "react-router-dom";

import { BasicTemplate } from "templates/BasicTemplate";
import { UserDto } from "type";
import { tokenState } from "recoil/auth";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { verifyUser } from "api/auth";

export function Verification() {
  const { state } = useLocation();
  const setToken = useSetRecoilState(tokenState);
  const navigate = useNavigate();

  useEffect(() => {
    const { email, password } = state as UserDto;
    (async () => {
      const verifiedToken = (await verifyUser({ email, password })).data;
      return verifiedToken;
    })()
      .then((verifiedToken) => {
        if (verifiedToken) {
          setToken(verifiedToken);
        } else {
          alert("verification failed");
        }
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <BasicTemplate component={<div>verifying user...</div>} />;
}
