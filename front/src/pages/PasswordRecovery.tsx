import {
  PasswordRecoveryImage,
  PasswordRecoveryProcess,
} from "components/PasswordRecovery";

import { AuthTemplate } from "templates/AuthTemplate";

export function PasswordRecovery() {
  return (
    <AuthTemplate
      ImageComponent={<PasswordRecoveryImage />}
      ProcessComponent={<PasswordRecoveryProcess />}
    />
  );
}
