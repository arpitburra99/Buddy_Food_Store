import React from "react";
import "./ContactUs.css";
import { assets } from "../../assets/assets";
import { IoMdPerson } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { MdMessage } from "react-icons/md";

const ContactUs = () => {
  return (
    <div className="contact-us container" id="contact-us">
      <h1>Contact Us</h1>
      <div className="contact-us-container">
        <div className="contact-us-img">
          <p>
            Contact us to make an order or get support for any queries or issues
            you may have with your food.
          </p>
          <img src={assets.contact_us_img} alt="contact-us" />
        </div>
        <hr />
        <div className="form-container">
          <p>For any queries, please contact us</p>
          <div className="contact-us-form">
            <div className="input-container">
              <IoMdPerson className="icon" />
              <input type="text" placeholder="Name" />
            </div>
            <div className="input-container">
              <MdEmail className="icon" />
              <input type="text" placeholder="Email" />
            </div>
            <div className="input-container">
              <AiFillPhone className="icon" />
              <input type="text" placeholder="Phone" />
            </div>
            <div className="input-container">
              <MdMessage className="icons" />
              <textarea placeholder="Message"></textarea>
            </div>
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
