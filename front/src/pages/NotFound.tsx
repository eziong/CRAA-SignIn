import { BasicTemplate } from "templates/BasicTemplate";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }, []);

  return <BasicTemplate component={<div>not found</div>} />;
}
