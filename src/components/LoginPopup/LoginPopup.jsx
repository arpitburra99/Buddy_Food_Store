import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin, setUser }) => {
  const [currentStatus, setCurrentStatus] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleLogin = () => {
    // Check if user exists in localStorage
    const storedUser = localStorage.getItem("user");
    const userData = storedUser ? JSON.parse(storedUser) : null;

    if (userData && userData.email === email && userData.password === password) {
      // User exists and can log in
      setUser(userData);
      setShowLogin(false);
    } else {
      alert("No account found with this email. Please create an account first.");
    }
  };

  const handleSignUp = () => {
    if (name && email && password) {
      const userData = { name, email, password };
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
      setShowLogin(false);
    }
  };

  return (
    <div className="login-popup">
      <form
        className="login-popup-container"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="login-popup-title">
          <h2>{currentStatus}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="close"
          />
        </div>
        <div className="login-popup-inputs">
          {currentStatus === "Sign in" && (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required
            />
          )}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button
            onClick={currentStatus === "Login" ? handleLogin : handleSignUp}
            type="submit"
          >
            {currentStatus === "Login" ? "Login" : "Create Account"}
          </button>
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
          {currentStatus === "Login" ? (
            <p>
              Create a new account?
              <span onClick={() => setCurrentStatus("Sign in")}>
                Click here
              </span>
            </p>
          ) : (    
            <p>
              Already have an account?
              <span onClick={() => setCurrentStatus("Login")}>Login here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPopup;
