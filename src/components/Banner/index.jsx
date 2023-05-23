import React from 'react'
import { Carousel } from 'react-bootstrap';


function Banner() {
  return (
     <Carousel  variant="dark" >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://thumbs.dreamstime.com/b/apartment-building-modern-buildings-new-westminster-british-columbia-canada-40351928.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>Welcome To Golden Property Management</h5> 
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/free-photo/analog-landscape-city-with-buildings_23-2149661462.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>We Care Our Tenants</h5>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://img.freepik.com/free-photo/building_1127-3497.jpg "
      alt="Third slide"
    />
    <Carousel.Caption>
       <h5 className="text-white">Always Near on Your Service</h5>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}

export default Banner