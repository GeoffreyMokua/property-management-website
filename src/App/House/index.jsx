import React from "react";
import { Card, Col } from "react-bootstrap";

function House({house}) {
  const {
    house_type : houseType,
    rent,
    description,
    image,
   } = house;

  return (
    <div>
      <Col>
        <Card className="mx-5">
          <Card.Img variant="top img" src={image} />
          <Card.Body>
            <Card.Title className="fw-bold">Name: {houseType}</Card.Title>
            <Card.Text>
              <h5 className="">
               Property Description: {description}
              </h5>
              <h5 className="fw-bold">
                Price Value: {rent}{" "}
              </h5>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}

export default House;
