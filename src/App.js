import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Pages/Shared/Footer/Footer";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import NotFound from "./Pages/NotFound/NotFound";
import SingleFood from "./Pages/SingleFood/SingleFood";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Delivery from "./Pages/Delivery/Delivery";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route
            path="food/:id"
            element={
              <PrivateRoute>
                <SingleFood />
              </PrivateRoute>
            }
          />
          <Route
            path="delivery"
            element={
              <PrivateRoute>
                <Delivery />
              </PrivateRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
