import React from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";

const BookNow = () => {
  const { id } = useParams();
  const { toursData, firebaseData } = useAuth();
  const { tours } = toursData;
  const { user } = firebaseData;

  // protect data undefined error in reload
  if (tours.length === 0) {
    return (
      <div className="text-center p-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  const tour = tours.find((tour) => tour._id === id);
  const { name, image, description, price } = tour;

  return (
    <section className="container row d-lg-flex py-5">
      <div className="col-lg-6">
        <h2>Travel: <span className="text-info">{name}</span></h2>
        <img className="img-fluid py-4" src={image} alt="" />
        <p>{description}</p>

        <h4>
          Tour Package Special Price: BDT
          <span className="text-danger">{price}.00 </span>
        </h4>
      </div>
      <div className="col-lg-6">
        <Form>
          <Form.Label>Your Name:</Form.Label>
          <Form.Control type="name" readOnly value={user.displayName} /> <br />
          <Form.Label>Your Email:</Form.Label>
          <Form.Control type="email" readOnly value={user.email} /> <br />
          <Form.Label>Address:</Form.Label>
          <Form.Control
            type="address"
            required
            as="textarea"
            placeholder="Please Enter Your Present Address...."
            rows={3}
          />
          <br />
          <Form.Label>Payment Information:</Form.Label>
          <Form.Control
            type="payment"
            as="textarea"
            placeholder="Payment Details:(Bank, Bkash, Nagad, etc....)"
            rows={3}
          />
          <Form.Check type="checkbox" label="I have read and accept the terms and conditions." />
          <br />
          <Button variant="primary" type="submit">
            Booking Confirm
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default BookNow;
