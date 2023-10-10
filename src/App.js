import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import SignUp from "./pages/auth/SignUp";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/dashboard/Dashboard";
import Review from "./pages/dashboard/Review";
import Payment from "./pages/dashboard/Payment";
import History from "./pages/dashboard/History";
import ContactUs from "./pages/dashboard/ContactUs";
import UserLayout from "./components/UserLayout";

const App = () => {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/shop"
            element={
              <Layout>
                <Shop />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/blog"
            element={
              <Layout>
                <Blog />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
          <Route path="/account" element={<Account />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/cart"
            element={
              <Layout>
                <Cart />
              </Layout>
            }
          />
          <Route
            path="/dashboard"
            element={
              <UserLayout>
                <Dashboard />
              </UserLayout>
            }
          />
          <Route
            path="/review"
            element={
              <UserLayout>
                <Review />
              </UserLayout>
            }
          />
          <Route
            path="/payment"
            element={
              <UserLayout>
                <Payment />
              </UserLayout>
            }
          />
          <Route
            path="/history"
            element={
              <UserLayout>
                <History />
              </UserLayout>
            }
          />
          <Route
            path="/contactus"
            element={
              <UserLayout>
                <ContactUs />
              </UserLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
