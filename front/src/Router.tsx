import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "pages/Home";
import { NotFound } from "pages/NotFound";
import { SignIn } from "pages/SignIn";
import { SignUp } from "pages/SignUp";
import { Verification } from "pages/Verification";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/home" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
