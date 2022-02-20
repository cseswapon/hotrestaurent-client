import React, { useState, useEffect } from "react";
import Breakfast from "../Breakfast/Breakfast";
import Lunch from "../Lunch/Lunch";
import Diner from "../Diner/Diner";
import "./Foods.css";
const Foods = () => {
  const [foods, setFoods] = useState([]);
  const [breakFast, setBreakFast] = useState("Breakfast");
  const [lunchs, setLunchs] = useState([]);
  const [diners, setDiners] = useState([]);
  useEffect(() => {
    fetch("/foods.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  const handelBreakfast = (br) => {
    const breakfast = foods.filter((breakfast) => breakfast.type === br);
    setBreakFast(breakfast);
    setLunchs("");
    setDiners("");
  };
  const handelLunch = (lu) => {
    const lunch = foods.filter((lunch) => lunch.type === lu);
    setLunchs(lunch);
    setBreakFast("");
    setDiners("");
  };
  const handelDiner = (di) => {
    const diner = foods.filter((diner) => diner.type === di);
    setDiners(diner);
    setBreakFast("");
    setLunchs("");
  };
  return (
    <>
      <div className="container my-4">
        <div className="text-center">
          <ul className="d-flex align-items-center justify-content-center link-li">
            <li
              className="list-unstyled fw-bold"
              onClick={() => handelBreakfast("Breakfast")}
            >
              Breakfast
            </li>
            <li
              className="list-unstyled mx-4 fw-bold"
              onClick={() => handelLunch("Lunch")}
            >
              Lunch
            </li>
            <li
              className="list-unstyled fw-bold"
              onClick={() => handelDiner("Dinner")}
            >
              Diner
            </li>
          </ul>
        </div>
        {/* component randaring */}

        {breakFast.length > 0 && <Breakfast breakfast={breakFast} />}
        {lunchs.length > 0 && <Lunch lunchs={lunchs} key={lunchs.id} />}
        {diners.length > 0 && <Diner diners={diners} key={diners.id} />}
      </div>
    </>
  );
};

export default Foods;
