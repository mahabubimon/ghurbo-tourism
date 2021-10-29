import React from "react";
import { Spinner } from "react-bootstrap";
import useAuth from "../../../../hooks/useAuth";
import Contact from "../contact/Contact";
import About from "../about/About";
import Banner from "../banner/Banner";
import Tours from "../tours/Tours";

const Home = () => {
  const { toursData } = useAuth();
  const { tours } = toursData;

  if (tours.length === 0) {
    return (
      <div className="text-center p-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }
  return (
    <>
      <Banner></Banner>
      <Tours></Tours>
      <About></About>
      <Contact></Contact>
    </>
  );
};

export default Home;
