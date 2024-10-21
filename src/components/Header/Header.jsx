import React from "react";
import "./Header.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { assets } from "../../assets/assets";

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="header">
      {/* <div className="header-contants">
        <h2>Order Your Favourite food here</h2>
        <p>
          Choose from a wide variety of choices and enjoy delicious food at your
          home or anywhere around the world with our online food ordering
          service, one of the best online food ordering services.
        </p>
        <button>View Menu</button>
      </div> */}
      <Slider {...settings}>
        <div className="slide">
          <img src={assets.header_img} alt="Food 1" />
          <div className="header-contants">
            <h2>Order Your Favourite Food Here</h2>
            <p>
              Choose from a wide variety of choices and enjoy delicious food at
              your home or anywhere around the world with our online food
              ordering service, one of the best online food ordering services.
            </p>
            <button>View Menu</button>
          </div>
        </div>
        <div className="slide">
          <img src={assets.header_img} alt="Food 2" />
          <div className="header-contants">
            <h2>Delicious Meals Await You Around</h2>
            <p>
              Experience exquisite tastes and find your next favorite dish with
              just a click of a button on our online ordering platform.
            </p>
            <button>View Menu</button>
          </div>
        </div>
        <div className="slide">
          <img src={assets.header_img} alt="Food 3" />
          <div className="header-contants">
            <h2>Satisfy Your Cravings With Our Menu</h2>
            <p>
              Enjoy the convenience of ordering your beloved meals from the
              comfort of your home or anywhere around the world with our online
              food ordering service.
            </p>
            <button>View Menu</button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Header;
