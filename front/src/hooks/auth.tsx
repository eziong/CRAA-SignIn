import { providerState, tokenState } from "recoil/auth";

import { useRoute } from "./route";
import { useSetRecoilState } from "recoil";
import { verifyUser } from "api/auth";

export const useAuthentication = () => {
  const setToken = useSetRecoilState(tokenState);
  const setProvider = useSetRecoilState(providerState);
  const { goHomePage } = useRoute();

  const onLogIn = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    (async () => {
      const verifiedToken = (await verifyUser({ email, password })).data;
      return verifiedToken;
    })()
      .then((verifiedToken) => {
        if (verifiedToken) {
          setToken(verifiedToken);
          setProvider("local");
        } else {
          alert("verification failed");
        }
        goHomePage();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onLogOut = () => {
    setToken("");
    setProvider("local");
  };

  return {
    onLogIn,
    onLogOut,
  };
};
