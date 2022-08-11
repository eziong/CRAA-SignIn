import { BasicTemplate } from "templates/BasicTemplate";
import { HomeButton } from "components/Home";
import { useVerificationRoute } from "hooks/route";
export function Home() {
  useVerificationRoute();

  return <BasicTemplate component={<HomeButton />} />;
}
