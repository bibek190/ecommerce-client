import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const UserLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="d-flex user-layout">
        <div className="p-3 w-25">
          <Sidebar />
        </div>
        <div className="w-100">{children}</div>
      </div>

      <Footer />
    </>
  );
};

export default UserLayout;
