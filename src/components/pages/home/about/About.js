import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <section id="about" className="bg-light py-5">
      <Container className="text-start">
        <h2 className="text-center">About Ghurbo Tourism</h2>
        <div className="d-lg-flex py-5">
          <div className="col-lg-6 pe-5">
            <h3 className="py-5">
              Ghurbo Tourism – The Tour Operators in Bangladesh
            </h3>
            <p>
              Deshghuri was awarded Trip Advisor Certificate of Excellence in
              2019 and Traveler’s Choice Award in 2020
            </p>
            <p>
              We were probably the fastest-growing Inbound Tour Company in
              Bangladesh before the Covid-19 pandemic that stopping the global
              tourism industry.
            </p>
          </div>
          <div className="col-lg-6">
            <img
              className="img-fluid"
              src="https://i.ibb.co/h7pFFFs/about-2.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="d-lg-flex py-5">
          <div className="col-lg-6">
            <img
              className="img-fluid"
              src="https://i.ibb.co/S76p2vS/about-1.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-6 ps-5">
            <h3 className="py-5">A Brief History</h3>
            <p>
              Deshghuri is a registered Tour Operator in Bangladesh, under the
              legal name of Swadeshi Communications. After completing high
              school, we, the founders went for higher studies. We were
              enthusiastic to visit places around and many countries to enjoy
              their beauty, history, and culture. During our higher study, the
              aim was:
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
