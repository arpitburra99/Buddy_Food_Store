import React from "react";
import "./AboutUs.css";
import { assets } from "../../assets/assets";

const AboutUs = () => {
  return (
    <div className="about-us container" id="about-us">
      <h1>About Us</h1>
      <div className="about-us-container">
        <div className="about-us-contain">
          <p>
            Buddy Food Store is a food delivery service that offers a wide range
            of cuisines and dishes. We have an extensive menu that is constantly
            evolving, and we are always looking for new and exciting ways to
            offer our customers the best experience possible. We are committed
            to providing the freshest and most delicious food from around the
            world, and we are always looking for ways to improve our service.
          </p>
          <p>
            At Buddy Food Store, we are passionate about food. We believe that
            food should be accessible to everyone, and we are always looking for
            ways to make our service more accessible. We are committed to
            providing our customers with the best possible experience, and we
            are always looking for ways to improve our service.
          </p>
          <p>
            Thank you for choosing Buddy Food Store. We hope you enjoy our
            service as much as we do.
          </p>
        </div>
        <hr />
        <div className="about-us-img">
          <img src={assets.about_us} alt="about-us" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
