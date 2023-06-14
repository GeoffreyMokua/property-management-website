import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
// import { Carousel } from 'react-bootstrap';

function Banner() {
  return (
    <section class="showcase">
      <img
        src="https://img.freepik.com/free-photo/modern-villa-with-multiple-lights-sun-loungers-asprovalta-greece_1268-16093.jpg"
        alt="P"
      />
      <div class="overlay">
        <strong>
          <h2>Golden Management</h2>
        </strong>
        <p>
          Improving the Lives of Real Estate Investors and Residents Since 2022
        </p>
        <div className="col-sm-7 col-6">
          <Link to="/contact">
            <button className="button-app">
              Discover More<i class="fas fa-arrow-alt-circle-right"></i>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Banner;
