import React, { useState } from "react";
import Header from "../../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createNewClientUser } from "../../redux/auth/userActions";

const SignUp = () => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createNewClientUser(form));
    navigate("/account");
  };

  return (
    <>
      <Header />
      <div className="container p-5 d-flex flex-column align-items-center justify-content-center form ">
        <h3>Sign up </h3>
        <div className="row w-75 border shadow rounded">
          <div className="col-6 signup-image"></div>
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
              <div className="form-group  ">
                <label className="py-2">
                  <h4>First Name</h4>
                </label>
                <input
                  type="text"
                  className="form-control fs-5"
                  placeholder="Enter your name"
                  name="fName"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group ">
                <label>
                  <h4 className="p-3">Create Password</h4>
                </label>
                <input
                  type="password"
                  className="form-control fs-5"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group ">
                <label>
                  <h4 className="p-3">Confirm Password</h4>
                </label>
                <input
                  type="password"
                  className="form-control fs-5"
                  placeholder="Password"
                  name="confirmPassword"
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-success m-3 p-2">
                Signup
              </button>
              <div className="row">
                <div className="col-6">
                  <p>Forgot Password</p>
                </div>
                <div className="col-6">
                  <Link to={"/account"}>
                    <h5>Login</h5>
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

export default SignUp;
