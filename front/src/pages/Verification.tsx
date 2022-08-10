import { readUser, verifyUser } from "api/auth";
import { useLocation, useNavigate } from "react-router-dom";

import { BasicTemplate } from "templates/BasicTemplate";
import { UserDto } from "type";
import { setStorage } from "utils/storage";
import { useEffect } from "react";

export function Verification() {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { email, password } = state as UserDto;
    (async () => {
      const verifiedToken = (await verifyUser({ email, password })).data;
      return verifiedToken;
    })()
      .then((verifiedToken) => {
        if (verifiedToken) {
          // const user = readUser(email);
          setStorage("token", verifiedToken);
          navigate("/");
        } else navigate("/");
      })
      .catch(() => {
        navigate("/");
      });
  }, []);

  return <BasicTemplate component={<div>verifying user...</div>} />;
}
