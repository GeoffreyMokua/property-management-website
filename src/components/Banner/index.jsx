import React from 'react'
import './Banner.css'
// import { Carousel } from 'react-bootstrap';


function Banner() {
  return (
    <section class="showcase">
      <img
        src="https://img.freepik.com/free-photo/modern-villa-with-multiple-lights-sun-loungers-asprovalta-greece_1268-16093.jpg"
        alt="P"
      />
      <div class="overlay">
        <h2>Golden Property Management</h2>
        <p>
          Improving the Lives of Real Estate Investors and Residents Since 2022
        </p>
      </div>
    </section>
  );
}

export default Banner