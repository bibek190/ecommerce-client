import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";

const Header = () => {
  return (
    <>
      <header className="header-top-strip p-1 shadow-sm">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-6">
              <p>This is the trending items</p>
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
      <header className="header-upper p-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2">
              <Link>
                <h2>E.Shop</h2>
              </Link>
            </div>
            <div className="col-3 text-center m-auto d-flex align-items-center justify-content-center ">
              <div class="input-group mb-3 ">
                <span className="input-group-text" id="basic-addon1">
                  All
                </span>
                <input
                  type="text"
                  className="form-control p-2"
                  placeholder="Search items"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <button className="input-group-text" id="basic-addon2">
                  Search
                </button>
              </div>
            </div>
            <div className="col-4 d-flex align-items-center justify-content-between">
              <Link to={"/"}>HOME</Link>
              <Link to={"/shop"}>SHOP</Link>
              <Link to={"/blog"}>BLOG</Link>
              <Link to={"/about"}>ABOUT</Link>
              <Link to={"/contact"}>CONTACT</Link>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-around">
              <Link className="mx-2">
                <AiOutlineShoppingCart className="fs-4 pr-4" />
                <span>Cart</span>
              </Link>
              <Link>
                <MdAccountCircle className="fs-4 pr-4" />
                <span>Account</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
