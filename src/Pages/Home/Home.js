import React from "react";
import Foods from "../Foods/Foods";
import "./Home.css";
const Home = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("Hello World");
  };
  return (
    <>
      <div className="homeBanner position-relative">
        <div className="position-absolute custom-content">
        <h4 className="text-center my-3">Best food waiting for your belly</h4>
          <form className="my-3" onSubmit={handelSubmit}>
            <input
              type="text"
              name="search"
              id="search-input"
              placeholder="Search you food..."
              className="position-relative input-box"
            />
            <input
              type="submit"
              value="Search"
              className="position-absolute custom-singup custom-search-submit"
            />
          </form>
        </div>
          </div>
          <Foods/>
    </>
  );
};

export default Home;
