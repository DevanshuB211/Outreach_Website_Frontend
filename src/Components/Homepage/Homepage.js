import React from "react";
import RightImage from "./Assets/Right_image.png";
import "./Homepage.css";

import HomePageCarousel from "../HomePageCarousel/HomePageCarousel";

class Homepage extends React.Component {
  render() {
    return (
      <>
        <div className="ui container">
          <div id="FirstSection">
            <div id="FirstSectionContent">
              <h1>Lorem Ipsum</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu,
                ligula dictum facilisis et morbi aliquet. Egestas diam porttitor
                faucibus elementum facilisis consequat risus elit.
              </p>
              <button>Tap to know more</button>
            </div>
            <div id="FirstSectionImage">
              <img alt="img" src={RightImage} />
            </div>
          </div>
        </div>

        <div className="ui container">
          <HomePageCarousel />
        </div>
      </>
    );
  }
}

export default Homepage;
