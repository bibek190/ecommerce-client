import React, { useState } from "react";
import Login from "../assets/images/login.webp";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Account = () => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <div className="container p-5 d-flex flex-column align-items-center justify-content-center form my-5">
        <h3>Login </h3>
        <div className="row w-75 border shadow rounded">
          <div className="col-6 w-50 signup-image">
            {/* <img src={Login} alt="" className="img-fluid" /> */}
          </div>
          <div className="col-6 w-50 ">
            <form
              className=" d-flex flex-column text-center"
              onSubmit={handleSubmit}
            >
              <div className="form-group  ">
                <label className="py-2">
                  <h4>Email address</h4>
                </label>
                <input
                  type="email"
                  className="form-control fs-5"
                  placeholder="Enter email"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group ">
                <label>
                  <h4 className="p-3">Password</h4>
                </label>
                <input
                  type="password"
                  className="form-control fs-5"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-success m-3 p-2">
                Login
              </button>
              <div className="row">
                <div className="col-6">
                  <p>Forgot Password</p>
                </div>
                <div className="col-6">
                  <Link to={"/signup"}>
                    <h5>Signin</h5>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
