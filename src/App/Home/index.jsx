import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Service from '../../components/Service'
import Partner from '../../components/Partner'
import Booking from '../../components/Booking'
const Home = () => {
  return (
    <div>
         <Header />
         <Banner />
         <Service />
         <Booking />
         <Partner />
        <Footer />
    </div>
  )
}

export default Home