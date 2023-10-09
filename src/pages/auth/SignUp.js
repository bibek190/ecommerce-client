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
      <div className=" container  d-flex flex-column align-items-center justify-content-center form ">
        <h3 className="pt-4">Sign up </h3>
        <div className="signin-page row w-50  border shadow rounded">
          <div className="col-6 signup-image"></div>
          <div className="col-6 w-50 ">
            <form
              className=" d-flex flex-column text-center"
              onSubmit={handleSubmit}
            >
              <div className="form-group  ">
                <label className="py-1">
                  <h5>First Name</h5>
                </label>
                <input
                  type="text"
                  className="form-control fs-6"
                  placeholder="Enter your name"
                  name="fName"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group  ">
                <label className="py-1">
                  <h5>Email address</h5>
                </label>
                <input
                  type="email"
                  className="form-control fs-6"
                  placeholder="Enter email"
                  name="email"
                  onChange={handleChange}
                />
              </div>

              <div className="form-group  ">
                <label className="py-1">
                  <h5>Phone</h5>
                </label>
                <input
                  type="number"
                  className="form-control fs-6"
                  placeholder="+234567"
                  name="phone"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group ">
                <label className="py-1">
                  <h5>Create Password</h5>
                </label>
                <input
                  type="password"
                  className="form-control fs-6"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group ">
                <label>
                  <h5 className="p-1">Confirm Password</h5>
                </label>
                <input
                  type="password"
                  className="form-control fs-6"
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
