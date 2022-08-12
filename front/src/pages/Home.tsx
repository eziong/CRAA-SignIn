import { HomeControl } from "components/Home/HomeControl";
import { HomeTemplate } from "templates/HomeTemplate";
import { HomeVideo } from "components/Home/HomeVideo";
import { useVerificationRoute } from "hooks/route";
export function Home() {
  useVerificationRoute();
  const videoId = "738771222";

  return (
    <HomeTemplate
      VideoComponent={<HomeVideo videoId={videoId} />}
      ControlComponent={<HomeControl videoId={videoId} />}
    />
  );
  // return <BasicTemplate component={<HomeButton />} />;
}
