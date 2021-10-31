import React from "react";
import { Row } from "react-bootstrap";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-info py-4">
      <Row className="container">
        <div className="col-lg-6">
          <h4>
            Ghurbo Tourism Ltd, <br />
            3rd Floor, Taneem Square 158/E, Kemal Ataturk Avenue, Banani,
            <br /> Dhaka 1213, Bangladesh
          </h4>
        </div>
        <div className="col-lg-3">
          <h4>Connect with Us</h4>
          <FaLinkedin className="fs-1 text-white" />
          <FaFacebookSquare className="fs-1 text-white" />
          <FaTwitterSquare className="fs-1 text-white" />
          <FaInstagramSquare className="fs-1 text-white" />
        </div>
        <div className="col-lg-3">
          <h5>
            &copy;Copyright @2021, Ghurbo Tourism Limited. All Rights Reserved
            Terms of Use.
          </h5>
        </div>
      </Row>
    </footer>
  );
};

export default Footer;
