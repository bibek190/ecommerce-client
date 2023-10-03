import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import googleLogo from "../assets/images/google-play-logo.png";
import appStoreLogo from "../assets/images/app-store-logo.png";

const Footer = () => {
  return (
    <>
      <footer className="footer p-5">
        <div className="container">
          <div className="row text-start">
            <div className="col-4 flex flex-column ">
              <h3 className="mb-4">Contact us</h3>
              <hr />
              <div className="footer-details">
                <p>
                  <b>Address:</b>123 went street
                </p>
                <p>
                  <b>Phone:</b>+123456789
                </p>
                <p>
                  <b>Opening Hours:</b> Mon-Fri 9:00am-5:30pm
                </p>
                <p>
                  <b>Follow us</b>
                </p>
                <div className="social-icons d-flex gap-2 mb-4">
                  <Link className="fs-3" to={"/"}>
                    <AiFillTwitterCircle />
                  </Link>
                  <Link className="fs-3" to={"/"}>
                    <BsFacebook />
                  </Link>
                  <Link className="fs-3" to={"/"}>
                    <BsInstagram />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-4">
              <h3 className="mb-4">About</h3>
              <div className="footer-details ">
                <hr />
                <p>About us</p>
                <p>Terms and conditions</p>
                <p>Policy</p>
              </div>
            </div>
            <div className="col-4">
              <h3 className="mb-4">Available on </h3>
              <hr />
              <div className="d-flex flex-column gap-4">
                <img
                  src={googleLogo}
                  width={"200px"}
                  alt="google-logo"
                  className="img-fluid footer-logos"
                />
                <img
                  src={appStoreLogo}
                  width={"200px"}
                  alt="google-logo"
                  className="img-fluid footer-logos"
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-9">
              <p>&copy; Copyright all reserved 2023</p>
            </div>
            <div className="col-3 d-flex justify-content-around">
              <p>E-shop</p>
              <p>Terms and condition</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
