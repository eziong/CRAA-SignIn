import { BasicTemplate } from "templates/BasicTemplate";
import { UserDto } from "type";
import { useAuthentication } from "hooks/auth";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function Verification() {
  const { state } = useLocation();
  const { onLogIn } = useAuthentication();

  useEffect(() => {
    const { email, password } = state as UserDto;
    onLogIn({ email, password });
  }, []);

  return <BasicTemplate component={<div>verifying user...</div>} />;
}
