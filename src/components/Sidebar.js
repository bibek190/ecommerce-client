import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { user } = useSelector((state) => state.userInfo);
  return (
    <div className=" d-flex flex-column p-4 w-100 sidebar">
      <h4 className="text-center p-2">♖ Hi {user.fName} ♖</h4>
      <hr />
      <ul className="list-unstyled d-flex flex-column gap-2 fs-5">
        <li>Dashboard</li>
        <li>History</li>
        <li>Payment</li>
        <li>Favourites</li>
        <li>Dashboard</li>
      </ul>
    </div>
  );
};

export default Sidebar;
