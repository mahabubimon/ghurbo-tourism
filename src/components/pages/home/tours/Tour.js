import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Tour = ({ tour }) => {
  const { name, image, description, _id } = tour;
  return (
    <Col>
      <Card className="h-100">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to={`/package/${_id}`}>
            <Button className="mx-2 ">Book Now</Button>
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Tour;
