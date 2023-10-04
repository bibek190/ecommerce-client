import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";

const Header = () => {
  return (
    <>
      <header className="header-top-strip  shadow-sm">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-6 ">
              <p className="my-2">This is the trending items</p>
            </div>
            <div className="col-6 d-flex justify-content-between">
              <div>
                <a href="tel:+23456">Call us at +23456 </a>
              </div>
              <div>
                <Link>
                  <AiOutlineMail className="fs-3 mx-4" />
                </Link>
                <Link>
                  <BiPhoneCall className="fs-3 mx-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* second header */}
      <header className="header-upper p-1">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2 text-center">
              <Link className="d-flex justify-content-center pt-2">
                <h2 className="buttons">E.Shop</h2>
              </Link>
            </div>
            <div className="col-3 text-center m-auto d-flex align-items-center justify-content-center pt-2 ">
              <div class="input-group mb-3 ">
                <span className="input-group-text" id="basic-addon1">
                  All
                </span>
                <input
                  type="text"
                  className="form-control p-2 "
                  placeholder="Search items"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <button
                  className="input-group-text shadow-sm buttons"
                  id="basic-addon2"
                >
                  Search
                </button>
              </div>
            </div>
            <div className="col-4 d-flex align-items-center justify-content-between text-center m-auto">
              <NavLink to={"/"}>
                <span>HOME</span>{" "}
              </NavLink>
              <NavLink to={"/shop"}>SHOP</NavLink>
              <NavLink to={"/blog"}>BLOG</NavLink>
              <NavLink to={"/about"}>ABOUT</NavLink>
              <NavLink to={"/contact"}>CONTACT</NavLink>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-around">
              <NavLink to={"/cart"} className="d-flex buttons">
                <AiOutlineShoppingCart className="fs-3 mx-2" />
                <span>Cart</span>
              </NavLink>
              <NavLink to={"/account"} className="d-flex buttons">
                <MdAccountCircle className="fs-3 mx-2" />
                <span>Account</span>
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
