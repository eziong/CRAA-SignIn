import { BasicTemplate } from "templates/BasicTemplate";
import { useEffect } from "react";
import { useRoute } from "hooks/route";

export function NotFound({ path }: { path: string }) {
  const { goPath } = useRoute();

  useEffect(() => {
    setTimeout(() => {
      goPath(path);
    }, 1000);
  }, []);

  return <BasicTemplate component={<div>not found</div>} />;
}
