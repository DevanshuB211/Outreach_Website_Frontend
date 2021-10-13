//*************Created By Akshit Gupta*************
import React, { useState, useRef } from "react";
import "./Departments.css";
import list from "./departmentInfo";
import { departmentinfo } from "./DepartmentName";
import { slides } from "./AcadCarouselData";
import Crousel from "../Crousel/Crousel";
import plus from "./Assets/plus.svg";
import minus from "./Assets/minus.svg";

const Departments = () => {
  const [background, setBackground] = useState("");
  const [clickBackground, setClickBackground] = useState("");
  const [id, setId] = useState("");
  const myRef = useRef();
  const backgroundColor_List = ["#feba10", "#f96508", "#06ca3d", "#026ba1"];

  const OnHoverHandler = () => {
    let indx;
    do {
      indx = Math.floor(4 * Math.random());
    } while (background === backgroundColor_List[indx]);
    setBackground(backgroundColor_List[indx]);
  };

  const handleSelection = (index) => {
    setId(index);
    setClickBackground(background);
    console.log(myRef.current);
    myRef.current.scrollIntoView();
  };

  return (
    <>
      <h1 id="Departments_heading">Departments</h1>
      <div className="containerD">
        {list.map((data, idx) => {
          return (
            <div
              className="cardD"
              key={data.id}
              onClick={() => handleSelection(idx)}
              onMouseEnter={OnHoverHandler}
              style={{
                backgroundColor: `${id === idx ? clickBackground : ""}`,
                color: `${id === idx ? "#ffff" : ""}`,
                "--hover_color": background,
              }}
            >
              <p>{data.dep}</p>
            </div>
          );
        })}
      </div>
      <div ref={myRef}></div>
      <div
        className="crouselDep"
        id="dep"
        style={{ visibility: `${id === "" ? "hidden" : ""}` }}
      >
        {id !== "" ? (
          <>
            <h1 id="Departments_heading">{departmentinfo[id].name}</h1>
            <Crousel slides={slides} />
            <div className="imgDescription_Dep">
              <p>{departmentinfo[id].info1}</p>
              <p>{departmentinfo[id].info2}</p>
              <b>{departmentinfo[id].degree}</b>
              <br />
              <b>
                {departmentinfo[id].bcstats}
                {"  "}
                {departmentinfo[id].correct}
                {"  "}

                <img src={plus} alt="" />
                {"  "}
                {departmentinfo[id].wrong}
                {"  "}
                <img src={minus} alt="" />
              </b>
              <br />
              <div className="button">
                <button>Placement Statistics</button>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Departments;