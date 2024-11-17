import React from "react";
import { Outlet } from "react-router-dom";
import NAvBar from "../components/NAvBar";

const LoginLayout = () => {
  return (
    <section>
      <NAvBar />
      <Outlet />
    </section>
  );
};

export default LoginLayout;
