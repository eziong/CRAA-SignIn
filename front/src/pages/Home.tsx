import { BasicTemplate } from "templates/BasicTemplate";
import { useVerificationRoute } from "hooks/route";
export function Home() {
  useVerificationRoute();

  return <BasicTemplate component={<div>home page</div>} />;
}
