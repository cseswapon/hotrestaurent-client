import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Button } from "react-bootstrap";
import "./Delivery.css";
const Delivery = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  const [count, setCount] = useState(0);
  return (
    <div className="container my-5">
      <div className="row align-baseline">
        <div className="col-md-6 col-12">
          <h3>Edit Delivery Details</h3>
          <hr />
          <form className="submit-form mt-3" onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Delivery to door"
              {...register("door", { required: true })}
            />
            <input
              placeholder="Rode Number"
              {...register("road", { required: true })}
            />
            <input
              placeholder="Flat,suite or floor"
              {...register("flat", { required: true })}
            />
            <input
              placeholder="Business name"
              {...register("business", { required: true })}
            />
            <input
              placeholder="Instructor"
              {...register("instructor", { required: true })}
            />
            <input
              value="Save and Continue"
              type="submit"
              className="custom-singup"
            />
          </form>
        </div>
        <div className="col-md-6 col-12">
          <p>
            From: <b>{"Gulshan"}</b>
          </p>
          <p>Arriving in 20-30 min</p>
          <p>
            <b>{"107 Rd No 8"}</b>
          </p>
          <div className="d-md-flex justify-content-end row">
            {/* single card start */}
            <div className="row align-items-center card-select my-2">
              <div className="col-3">
                <img src={"as"} alt="avtor" style={{ width: 60 }} />
              </div>
              <div className="col-5">
                <p>
                  <b>{"Butter Nan"}</b>
                </p>
                <h3 className="text-danger fw-bold">{"$40"}</h3>
                <small className="text-muted">Delivery fee</small>
              </div>
              <div className="col-4">
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
            </div>
            {/* single card end */}
            <div className="row align-items-center card-select my-2">
              <div className="col-3">
                <img src={"as"} alt="avtor" style={{ width: 60 }} />
              </div>
              <div className="col-5">
                <p>
                  <b>{"Butter Nan"}</b>
                </p>
                <h3 className="text-danger fw-bold">{"$40"}</h3>
                <small className="text-muted">Delivery fee</small>
              </div>
              <div className="col-4">
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
            </div>
            {/* single card end */}
          </div>
          <div className="my-3 d-flex justify-content-between">
            <div>
              <p className="p-0 my-2 fs-5">Sub Total {"4"} Item</p>
              <p className="p-0 my-2 fs-5">Tax</p>
              <p className="p-0 my-2 fs-5">Delivery fee</p>
              <p className="p-0 my-2 fs-3 fw-bold">Total</p>
            </div>
            <div>
              <p className="p-0 my-2 fs-5">$360</p>
              <p className="p-0 my-2 fs-5">$5</p>
              <p className="p-0 my-2 fs-5">$20</p>
              <p className="p-0 my-2 fs-3 fw-bold">$325</p>
            </div>
          </div>
          <button disabled className="place-order">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
