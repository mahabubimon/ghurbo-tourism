import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Tour = ({tour}) => {
    const { name, image, description, price, _id } = tour;
  return (
    <Col>
      <Card className="h-100">
        <Card.Img className="h-25" variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>Package Price: BDT {price}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to={`/package/${_id}`}>
            <button className="my-btn btn-sm mx-2 ">Book Now</button>
          </Link>
        </Card.Footer>
      </Card>
      </Col>
  );
};

export default Tour;