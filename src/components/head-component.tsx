import React from 'react';
import '../App.css';

function Head() {
  return (
  <div>
  <div>
    <title>Robot Factory</title>
    <link rel="stylesheet" href="robot.css" />
  </div>
  <div>
    <div className="headContainer">
      <h1 className="hStyle"> ROBOT FACTORY </h1>
      <div className="logoStyle">
        <a
          href={"https://www.playtech.com/careers/our-locations/bulgaria-office"}
          target="_blank"
        >
        <img
          style={{width: "100%"}}
          src = {require("../images/playtech-logo.JPG")}
          alt=""
        />
        </a>
      </div>
    </div>
  </div>
  </div>
  );
}

export default Head;