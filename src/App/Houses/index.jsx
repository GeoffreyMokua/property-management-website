import React, { useEffect, useState } from "react";
import "./Houses.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import House from "../House";
import { Row } from "react-bootstrap";

function Houses() {
  const [houses, setHouses] = useState([]);
  const token = localStorage.getItem("houseToken");
  const config = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    fetch("/houses", config)
      .then((res) => res.json())
      .then((data) => setHouses(data));
  }, []);
  console.log(houses);
  return (
    <>
      <Header />
      <section class="show">
        <img
          src="https://img.freepik.com/free-photo/modern-luxury-domestic-room-comfortable-relaxation-generative-ai_188544-12679.jpg"
          alt="P"
        />
        <div class="overlay">
          <h2>
            <strong>
              OUR <br /> DEVELOPMENTS
            </strong>
          </h2>
          <p>Explore our Luxury Developments.</p>
        </div>
      </section>
      <div className="m-4" style={{ width: "100%" }}>
        <Row xs={1} md={2}>
          {houses ? houses.map((house) => <House house={house} />) : "loading"}
        </Row>
      </div>
      <Footer />
    </>
  );
}

export default Houses;
