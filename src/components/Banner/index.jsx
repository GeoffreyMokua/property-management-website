import React from "react";
import "./Banner.css";
import { ArrowForwardIosSharp } from "@mui/icons-material";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
// import { Carousel } from 'react-bootstrap';

function Banner() {
  return (
    <section class="showcase">
      <img
        src="https://img.freepik.com/free-photo/modern-villa-with-multiple-lights-sun-loungers-asprovalta-greece_1268-16093.jpg"
        alt="P"
      />

      <Stack
        sx={{
          zIndex: 10,
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          marginTop: "auto",
          marginBottom: "auto",
          backgroundColor: "rgba(0, 35, 82, 0.7)",
          position: "absolute",
        }}
      >
        <Stack sx={{ marginTop: "auto", marginBottom: "auto" }}>
          <strong>
            <h2>Golden Management</h2>
          </strong>
          <p>
            Improving the Lives of Real Estate Investors and Residents Since
            2022
          </p>
          <div>
            <Link to="/houses">
              <Button variant="contained" className="button-app">
                Discover More <ArrowForwardIosSharp />
              </Button>
            </Link>
          </div>
        </Stack>
      </Stack>
    </section>
  );
}

export default Banner;
