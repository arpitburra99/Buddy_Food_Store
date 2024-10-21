import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className="app-download container" id="app-download">
      <p>
        For Better Experience Download <br /> Buddy Food Store App
      </p>
      <div className="app-download-platform">
        <img src={assets.play_store} alt="playstore" />
        <img src={assets.app_store} alt="appstore" />
      </div>
    </div>
  );
};

export default AppDownload;
