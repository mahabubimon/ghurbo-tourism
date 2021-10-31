import React from "react";
import { CardGroup, Container } from "react-bootstrap";
import useAuth from "../../../../hooks/useAuth";
import Tour from "./Tour";
import "./tours.css";

const Tours = () => {
  const { toursData } = useAuth();
  const { tours } = toursData;

  return (
    <section id="tours" className="tours-image">
      <Container className="text-center pt-5">
        <h2>Welcome to <span className="text-info">Ghurbo Tourism</span></h2>
        <h2 className="text-success">Our Awesome Tour Packages</h2>
        <CardGroup className="row row-cols-1 row-cols-md-3 g-4 p-4">
          {tours.map((tour) => (
            <Tour key={tour._id} tour={tour}></Tour>
          ))}
        </CardGroup>
      </Container>
    </section>
  );
};

export default Tours;
