import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const { user } = useSelector((state) => state.userInfo);
  return (
    <div className=" d-flex flex-column p-4 w-100 sidebar text-white rounded">
      <h4 className="text-center p-2 ">♖ Hi {user.fName} ♖</h4>
      <hr />
      <ul className="list-unstyled d-flex flex-column gap-2  ">
        <NavLink to="/dashboard" className="links">
          <li>Dashboard</li>
        </NavLink>
        <NavLink to="/history" className="links">
          <li>History</li>
        </NavLink>
        <NavLink to="/payment" className="links">
          <li>Payments</li>
        </NavLink>
        <NavLink to="/review" className="links">
          <li>Reviews</li>
        </NavLink>
        <NavLink to="/contactus" className="links">
          <li>Contact us</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
