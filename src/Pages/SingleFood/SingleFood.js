import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Button } from "react-bootstrap";
import "./SingleFood.css";
import useFirebase from "../../hooks/useFirebase";
const SingleFood = () => {
  const [singleFood, setSingleFood] = useState([]);
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(1);
  const { id } = useParams();
  const { users } = useFirebase();
  useEffect(() => {
    fetch(`https://red-onion-backend.herokuapp.com/food/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleFood(data))
      .catch((err) => alert(err));
  }, [id]);
  const firstImage = (i) => {
    setIndex(i);
  };
  const secoundImage = (i) => {
    setIndex(i);
  };
  /* const collection = {
    email: users.email,
    images: singleFood.images[0],
    price: singleFood.price,
    name: singleFood.name,
    quantity: count,
  }; */
  /* const handelSend = () => {
    console.log(collection);
    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(collection),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }; */
  return (
    <div className="container">
      {singleFood.name && (
        <div className="row">
          <div className="col-md-6 col-12 my-4">
            <h1 className="my-4">{singleFood.name}</h1>
            <p>{singleFood.fullDescription}</p>
            <div className="d-flex align-items-center">
              <h3 className="my-4">$ {singleFood.price}</h3>
              <ButtonGroup aria-label="Basic example" className="ms-3">
                <Button
                  onClick={() => setCount(count <= 1 ? 1 : count - 1)}
                  style={{ background: "#ef1a3f", border: 0 }}
                  className="fw-bold btn-neg"
                >
                  -
                </Button>
                <input
                  className="text-center fw-bold input-text"
                  type="text"
                  value={count}
                  style={{ width: 70, border: 0 }}
                  readOnly
                />
                <Button
                  onClick={() => setCount(count + 1)}
                  style={{ background: "#ef1a3f", border: 0 }}
                  className="fw-bold btn-pos"
                >
                  +
                </Button>
              </ButtonGroup>
            </div>
            <div className="my-4">
              <Link
                onClick={() => {
                  // handelSend();
                }}
                className="text-decoration-none"
                to=""
              >
                <p className="custom-singup d-inline">
                  <i className="fas fa-cart-arrow-down me-2"></i>Add Cart
                </p>
              </Link>
            </div>
            <div className="d-flex align-items-center my-5">
              <div>
                <img
                  onClick={() => firstImage(0)}
                  src={singleFood.images[0]}
                  alt="avtor"
                  className="img-fluid img-click"
                  style={{ width: 130 }}
                />
              </div>
              <div>
                <img
                  onClick={() => secoundImage(1)}
                  src={singleFood.images[1]}
                  alt="avtor"
                  className="img-fluid ms-4 img-click"
                  style={{ width: 130 }}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 text-center">
            <img
              src={singleFood.images[index]}
              alt="avtor"
              className="img-fluid animated-img"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleFood;
