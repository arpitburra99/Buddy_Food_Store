import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-container-left">
          <img src={assets.logo} alt="logo" />
          <p>
            Buddy Food Store is an online food ordering platform that allows
            users to order food from their favorite restaurants. Our platform is
            designed to make ordering food easy and convenient for everyone.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="facebook" />
            <img src={assets.twitter_icon} alt="twitter" />
            <img src={assets.linkedin_icon} alt="linkedin" />
          </div>
        </div>
        <div className="footer-container-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-container-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1 123-456-7890</li>
            <li>contact@buddyfoodstore.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        © 2022 Buddy Food Store. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
