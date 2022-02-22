import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
const Diner = ({ diners }) => {
  const diner = [...diners];
  return (
    <div className="container">
      <Row xs={1} md={3} className="g-3">
        {diner.map((bk, index) => (
          <Col key={index}>
            <Card className="text-center">
              <Card.Img
                variant="top"
                className="card-img-top img-custom-rote mx-auto w-50"
                src={bk.images[0]}
              />
              <Card.Body>
                <Card.Title className="fs-6">{bk.name}</Card.Title>
                <Card.Text>{bk.shortDescription}</Card.Text>
                <Card.Text className="fs-3 fw-bold">$ {bk.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center my-3">
        <button className="btn btn-danger" disabled>
          Checkout your form
        </button>
      </div>
    </div>
  );
};

export default Diner;
