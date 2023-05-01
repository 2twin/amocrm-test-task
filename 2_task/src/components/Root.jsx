import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Background from "./Background";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Background />
    </>
  );
};

export default Root;
