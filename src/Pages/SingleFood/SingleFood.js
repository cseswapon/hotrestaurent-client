import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Button } from "react-bootstrap";
import "./SingleFood.css";
const SingleFood = () => {
  const [singleFood, setSingleFood] = useState([]);
  const [index, setIndex] = useState(null)
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://red-onion-backend.herokuapp.com/food/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleFood(data))
      .catch((err) => alert(err));
  }, [id]);
  const firstImage = (index) => {
    setIndex(index);
  }
  const secoundImage = (index) => {
    setIndex(index);
  }
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
                  style={{ background: "#ef1a3f", border: 0 }}
                  className="fw-bold btn-neg"
                >
                  -
                </Button>
                <input
                  className="text-center fw-bold input-text"
                  type="text"
                  defaultValue={0}
                  style={{ width: 70, border: 0 }}
                  readOnly
                />
                <Button
                  style={{ background: "#ef1a3f", border: 0 }}
                  className="fw-bold btn-pos"
                >
                  +
                </Button>
              </ButtonGroup>
            </div>
            <div className="my-4">
              <p className="custom-singup d-inline">
                <i className="fas fa-cart-arrow-down me-2"></i>Add Cart
              </p>
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
              src={`singleFood.images[${index}]`}
              alt="avtor"
              className="img-fluid"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleFood;
