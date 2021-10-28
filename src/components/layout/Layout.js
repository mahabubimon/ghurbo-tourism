import React from "react";
import Footer from "../shared/footer/Footer";
import Header from "../shared/header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
