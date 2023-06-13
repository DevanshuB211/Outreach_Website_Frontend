import React, { useState } from "react";

import BubbleCarousel from "./BubbleCarousel";

import FeildData from "./FeildData";
import "./FeildAchievements.css";

const Feild_wise_ach = () => {
  const [currentFeild, setCurrentFeild] = useState(0);
  const [current, setCurrent] = useState(0);

  const onClickFeildhandler = (idx) => {
    setCurrentFeild(idx);
    setCurrent(0);
  };

  const onClickHandler = (idx) => {
    setCurrent(idx);
  };

  return (
    <div className="main_container">
      <div id="Feild_wise_ach">
        <div onClick={() => onClickFeildhandler(0)} id="Feild_wise_ach_1"></div>
        <div onClick={() => onClickFeildhandler(1)} id="Feild_wise_ach_2"></div>

        <div onClick={() => onClickFeildhandler(2)} id="Feild_wise_ach_3"></div>
      </div>
      <div className="feild-ach-content">
        <BubbleCarousel
          current={current}
          Bubble_List={FeildData[currentFeild].Bubble_List}
        />
        <div id="feild-ach-data">
          <h2>{FeildData[currentFeild].name}</h2>
          <p>{FeildData[currentFeild].description}</p>
          <div className="scroll-feild-data">
            {FeildData[currentFeild].Achievements_List.map((obj, idx) => {
              return (
                <div
                  id="feild-ach-data-text"
                  className={current === idx ? "active" : ""}
                  onClick={() => onClickHandler(idx)}
                  key={obj.id}
                >
                  <div>
                    <p>{obj.dep}</p>
                    {obj.link !== "" && <a href={obj.link}>Know More</a>}
                  </div>
                  <div id="date_ach">
                    <p>{obj.date}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feild_wise_ach;
