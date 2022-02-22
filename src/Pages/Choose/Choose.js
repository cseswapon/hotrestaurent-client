import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import "./Chosse.css";
import SingleChoose from "./SingleChoose";
const Choose = () => {
  const [choose, setChoose] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setChoose(data))
      .catch((err) => alert(err));
  }, []);
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-6">
          <h3>Where you choose us?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae sint perferendis nesciunt facilis delectus eligendi
            reiciendis incidunt ipsam temporibus nihil amet recusandae quasi
            consectetur repellat veniam voluptates, nemo consequatur commodi.
          </p>
        </div>
      </div>
      {/* Choose me with mapping */}
      <Row xs={1} md={3} className="g-4">
        {choose.map((ch) => (
          <SingleChoose key={ch.id} ch={ch} />
        ))}
      </Row>
    </div>
  );
};

export default Choose;
