import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Card from "../components/Card";

const Home = () => {
  return (
    <>
      <section className="banner">
        <div>
          <div className="row">
            <div className="banner-details d-flex flex-column justify-content-center align-items-start ">
              <div className="border-dark shadow home-box mx-4">
                <span className="shadow-lg p-2 text-white ">
                  Trade in offer
                </span>
                <h1>Choose valuable deals</h1>
                <h2>On All Our Products</h2>
                <p className="text-white">Save more with discount vouchers</p>
                <Link className="button-links btn btn-success w-50 fs-4">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Hero />
      {/* currently working */}
      <section className="featured-products p-5">
        <div className="container-xxl ">
          <div className="row">
            <div className="text-center">
              <h1> Our Featured Products</h1>
              <p>All weather wears</p>
              <div>
                <Card />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
