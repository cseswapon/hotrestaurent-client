import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Pages/Shared/Footer/Footer";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
