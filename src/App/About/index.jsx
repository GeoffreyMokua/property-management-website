import React from "react";
import "./About.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const About = () => {
  return (
    <>
      <Header />
      <div class="about-section">
        <h2>About Us Page</h2>
        <p>
          Established in 2023, Golden Management is full-service residential and
          commercial property management company servicing Nairobi, Kenya with
          an unwavering dedication toward the optimization of each property
          under management. With offices in Nairobi and Mombasa, Golden
          Management is able to meticulously manage client’s investments
          thoroughout all parts of Kenya ensuring each is operating at its
          highest and best use. Diversifying further, Golden Management’s
          multidisciplinary team is unmatched in the industry. With both an
          in-house legal department and CPA’s on staff, our operation is able to
          avoid legal/tax issues at the outset and optimize revenue streams to
          their full potential. In the event legal issues do occur, our team can
          provide legal guidance and limit liability efficiently
        </p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
      </div>

      <h2 style={{ textAlign: "center" }}>Our Team</h2>
      <div class="row">
        <div class="column">
          <div class="card">
            <img
              src="https://img.freepik.com/free-photo/serious-executive-sitting-his-office_1098-1380.jpg"
              alt="Jane"
              style={{ width: "100%" }}
            />
            <div class="container">
              <h2>Jane Doe</h2>
              <p class="title">CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img
              src="https://img.freepik.com/free-photo/well-dressed-manager_1098-1944.jpg"
              alt="Mike"
              style={{ width: "100%" }}
            />
            <div class="container">
              <h2>Mike Ross</h2>
              <p class="title">Art Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>mike@example.com</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img
              src="https://img.freepik.com/free-photo/cheerful-young-businesswoman-smiling-camera_74855-4023.jpg"
              alt="John"
              style={{ width: "100%" }}
            />
            <div class="container">
              <h2>John Doe</h2>
              <p class="title">Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
