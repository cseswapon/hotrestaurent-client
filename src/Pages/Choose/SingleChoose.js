import React, { useState } from "react";
import { Card, Col } from "react-bootstrap";
const SingleChoose = ({ ch }) => {
  const [details, setDetails] = useState(false);
  const handelSeemore = () => {
    setDetails(true);
  };
  const handelSeeLess = () => {
    setDetails(false);
  };
  return (
    <Col>
      <Card className="custom-card-choose">
        <Card.Img variant="top" src={ch.image} />
        <Card.Body>
          <div className="row">
            <div className="col-md-2">
              <img src={ch.icon} alt="avtor" />
            </div>
            <div className="col-md-10">
              <Card.Title>{ch.title}</Card.Title>
              <Card.Text>
                {details ? ch.description : ch.description.slice(0, 100)}.
              </Card.Text>
              <p className="text-primary">
                {!details ? (
                  <span>
                    See more
                    <i
                      onClick={() => handelSeemore()}
                      className="fas fa-arrow-right arrow-custom ms-2"
                    ></i>
                  </span>
                ) : (
                  <span>
                    <i
                      onClick={() => handelSeeLess()}
                      className="fas fa-arrow-left arrow-custom me-2"
                    ></i>
                    See less
                  </span>
                )}
              </p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleChoose;
