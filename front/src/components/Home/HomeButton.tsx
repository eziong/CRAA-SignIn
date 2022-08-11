import { providerState, tokenState } from "recoil/auth";

import { Box } from "@mui/system";
import { ButtonWithIcon } from "modules/ButtonWithIcon";
import { useRoute } from "hooks/route";
import { useSetRecoilState } from "recoil";

export const HomeButton = () => {
  const setToken = useSetRecoilState(tokenState);
  const setProvider = useSetRecoilState(providerState);
  const { goBackPage } = useRoute();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      width={280}
      height={150}
    >
      <ButtonWithIcon text="Go back" onClick={goBackPage} variant="contained" />
      <ButtonWithIcon
        text="Logout"
        onClick={() => {
          setToken("");
          setProvider("local");
        }}
        variant="contained"
      />
    </Box>
  );
};
