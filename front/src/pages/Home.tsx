import { getStorage, setStorage } from "utils/storage";

import { BasicTemplate } from "templates/BasicTemplate";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { verifyUserWithToken } from "api/auth";

export function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const token = getStorage("token");
      if (token) {
        return (await verifyUserWithToken(token)).data;
      }
      return false;
    })().then((isValidToken) => {
      console.log(isValidToken);
      if (isValidToken) return;
      else {
        setStorage("token", "");
        navigate("/");
      }
    });
  }, []);

  return <BasicTemplate component={<div>home page</div>} />;
}
