import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { FiMenu } from "react-icons/fi";

const Nabvar = ({ setShowLogin, user, handleLogout }) => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { getTotalCartAmount } = useContext(StoreContext);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="navbar-container">
      <div className="navbar container">
        <Link to={"/"}>
          <img src={assets.logo} className="logo" alt="logo" />
        </Link>
        <ul className="navbar-menu">
          <Link
            to={"/"}
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </Link>
          <a
            href="#explore-menu"
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            Menu
          </a>
          <a
            href="#app-download"
            onClick={() => setMenu("mobile-app")}
            className={menu === "mobile-app" ? "active" : ""}
          >
            Mobile-App
          </a>
          <a
            href="#about-us"
            onClick={() => setMenu("about-us")}
            className={menu === "about-us" ? "active" : ""}
          >
            About Us
          </a>
          <a
            href="#contact-us"
            onClick={() => setMenu("contact-us")}
            className={menu === "contact-us" ? "active" : ""}
          >
            Contact Us
          </a>
        </ul>
        <div className="navbar-right">
          {/* <img src={assets.search_icon} className="navbar-search" alt="search" /> */}
          <div className="navbar-search-icon">
            <Link to={"/cart"}>
              <img src={assets.basket_icon} alt="basket" />
            </Link>
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
          </div>
          {user ? (
            <div className="user-info" onClick={toggleDropdown}>
              <img src={assets.profile_icon} alt="user" />
              {isDropdownOpen && (
                <div className="dropdown">
                  <span>{user.name || user.email}</span>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          ) : (
            <button onClick={() => setShowLogin(true)}>Sign In</button>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          <FiMenu size={25} />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="mobile-menu">
          <li>
            <Link
              to={"/"}
              onClick={() => {
                setMenu("home");
                setIsMenuOpen(false);
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <a
              href="#explore-menu"
              onClick={() => {
                setMenu("menu");
                setIsMenuOpen(false);
              }}
            >
              Menu
            </a>
          </li>
          <li>
            <a
              href="#app-download"
              onClick={() => {
                setMenu("mobile-app");
                setIsMenuOpen(false);
              }}
            >
              Mobile-App
            </a>
          </li>
          <li>
            <a
              href="#about-us"
              onClick={() => {
                setMenu("about-us");
                setIsMenuOpen(false);
              }}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#contact-us"
              onClick={() => {
                setMenu("contact-us");
                setIsMenuOpen(false);
              }}
            >
              Contact Us
            </a>
          </li>
          <li className="mobile-cart">
            <Link to={"/cart"} onClick={() => setIsMenuOpen(false)}>
              <img src={assets.basket_icon} alt="basket" />
            </Link>
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
          </li>
          <li className="mobile-signin">
            {user ? (
              <div className="user-info" onClick={toggleDropdown}>
                <img src={assets.profile_icon} alt="user" />
                {isDropdownOpen && (
                  <div className="dropdown-mobile">
                    <span>{user.name || user.email}</span>
                    <button onClick={handleLogout}>Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => {
                  setShowLogin(true);
                  setIsMenuOpen(false);
                }}
              >
                Sign In
              </button>
            )}
          </li>
        </ul>
      )}
    </div>
  );
};

export default Nabvar;
