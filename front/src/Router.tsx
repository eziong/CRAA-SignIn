import { BrowserRouter, Route, Routes } from "react-router-dom";

import { SignIn } from "pages/SignIn";
import { SignUp } from "pages/SignUp";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
