import React from "react";
import "./ForgotPassword.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const ForgotPassword = () => {
  return (
    <>
      <Header />
      <div className="containerk">
        <div
          class="card text-center"
          style={{
            width: "400px",
            height: "500px",
            backgroundColor: "#CCD6A6",
          }}
        >
          <div class="card-header h5 text-white bg-primary">Password Reset</div>
          <div class="card-body px-5">
            <p class="card-text py-2">
              Enter your email address and we'll send you an email with
              instructions to reset your password.
            </p>
            <div class="form-outlined">
              <input type="email" id="typeEmail" class="form-control my-3" />
              <label class="form-label" for="typeEmail">
                Email input
              </label>
            </div>
            <a href="#" class="btn btn-primary w-100">
              Reset password
            </a>
            <div class="d-flex justify-content-between mt-4">
              <a class="" href="/login">
                Login
              </a>
              <a class="" href="/register">
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ForgotPassword;
