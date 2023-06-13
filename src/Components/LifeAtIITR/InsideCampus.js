// *************Made By Rahul Modi**************
import React from "react";
import "./InsideCampus.css";
import Carousel from "../Crousel/Crousel";
import InsideCampusData from "./InsideCampusData";

const InsideCampus = () => {
  return (
    <div id="InsideCampus" className="InsideCampus__Section main_container">
      <h1 className="InsideCampus__heading">R-Insider</h1>
      <Carousel slides={InsideCampusData} />
      <div className="CampusLife">
        <h3 className="CampusLife__heading">Campus Life</h3>
        <p className="CampusLife__para">
          Life at an IIT is always great, but at IIT Roorkee, it's a special
          blend of a modern life and traditional values. History, it is said, is
          a great teacher, and given our glorious and long heritage of over 150
          years, we have had a long time to learn! Combine that with the latest
          cutting-edge technologies, and you have IITR in a nutshell. From the
          mesmerizing James Thomason Building to the speedy Internet, from the
          struggles of trying to get to class scheduled for 8am on time after
          waking up at 7.30am to experiencing calm evenings where one is sure to
          find a guitarist strumming his strings, from chapos at nescafe,
          Georgia, or the Architecture and Earth Science canteen to finding
          notes days before exams, the campus offers a life many dream of, but
          few get to live it.
        </p>
      </div>
    </div>
  );
};

export default InsideCampus;
