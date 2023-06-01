import React from 'react'
import { Link } from 'react-router-dom';
import './Booking.css'



function Booking () {


    return (
        <div className="booking row mx-3">
        <div className="col-lg-7 col-12">
            <p className="title">Tired Of Self-Management? Schedule a Consult Today.</p>
        </div> 
        <div className="col-lg-5 col-12">
            <Link to="/contact">
              <button className="button-app">CONTACT US<i class="fas fa-arrow-alt-circle-right"></i></button>
            </Link>
        </div>
    </div>

    )
}

export default Booking;