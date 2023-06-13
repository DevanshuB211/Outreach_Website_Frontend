import React, { useState } from "react";

import Carousel from "../Crousel/Crousel";

import "./Events.css";
import EventsData from "./EventsData";
import Events__logo from "./Assests/Events_Img/Events_logo.png";

const Events = () => {
  const [currentEvent, setCurrentEvent] = useState(0);
  const onClickhandler = (event) => {
    setCurrentEvent(event);
  };
  return (
    <div id="Events" className="main_container">
      <h1 className="Events__heading">Events</h1>
      <ul className="Events__list">
        {EventsData.map((event, key) => {
          return (
            <li
              className={currentEvent === key ? "active" : ""}
              onClick={() => {
                onClickhandler(key);
              }}
              key={key}
            >
              {event.name}
            </li>
          );
        })}
      </ul>
      <Carousel slides={EventsData[currentEvent].CarouselData} />
      <p className="Event__description">
        {EventsData[currentEvent].description}
      </p>
      <img className="Companies_Logo" src={Events__logo} alt="Companies Logo" />
    </div>
  );
};

export default Events;
