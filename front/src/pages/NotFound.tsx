import { BasicTemplate } from "templates/BasicTemplate";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function NotFound({ path }: { path: string }) {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(path);
    }, 1000);
  }, []);

  return <BasicTemplate component={<div>not found</div>} />;
}
