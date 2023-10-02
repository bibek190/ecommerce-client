import React from "react";
import Footer from "../../pages/footer/Footer";
import Header from "../../pages/header/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
