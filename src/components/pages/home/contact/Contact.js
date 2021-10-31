import React from "react";
import { Button, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <section id="contact" className="container py-5">
      <Row>
        <h5 className="text-center">For more Information</h5>
        <h2 className="text-center text-success">Contact Us</h2>
        <div className="mb-3 col-lg-6">
          <div>
            <label>Your Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
            />{" "}
            <br />
          </div>
          <div>
            <label>Your Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
            />
          </div>{" "}
          <br />
          <div className="mb-3">
            <label>Text Your Message:</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Your Message Type Here...."
              rows="6"
            ></textarea>{" "}
            <br />
            <Button className="bg-primary" type="submit" value="Send Message">
              Send Message
            </Button>
          </div>
        </div>
        <div className="col-md-6">
          <img
            className="img-fluid"
            src="https://i.ibb.co/DK6ZR4D/contact.jpg"
            alt=""
          />
        </div>
      </Row>
    </section>
  );
};

export default Contact;
