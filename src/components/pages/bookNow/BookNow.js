import axios from "axios";
import React from "react";
import { Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";

const BookNow = () => {
  const { id } = useParams();
  const { toursData, firebaseData } = useAuth();
  const { tours } = toursData;
  const { user } = firebaseData;
  const { register, handleSubmit, reset } = useForm();

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

  const onSubmit = (data) => {
    axios
      .post("https://ghurbo-tourism.herokuapp.com/orders", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added successfully");
          reset();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="container row d-lg-flex py-5">
      <div className="col-lg-8">
        <h2>
          Travel: <span className="text-info">{name}</span>
        </h2>
        <img className="img-fluid w-75 py-4" src={image} alt="" />
        <p>{description}</p>

        <h4>
          Tour Package Special Price: BDT
          <span className="text-danger">{price}.00 </span>
        </h4>
      </div>
      <div className="col-lg-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Your Name:</label>
          <br />
          <input
            {...register("name", { required: false, maxLength: 20 })}
            value={user.displayName}
          />
          <br />
          <label>Your Email:</label>
          <br />
          <input {...register("email")} value={user.email} />
          <br />
          <br />
          <input {...register("title")} value={name} />
          <br />
          <br />
          <input {...register("price")} value={price} />
          <br />
          <label>Address:</label>
          <br />
          <input {...register("address", { required: true, maxLength: 20 })} />
          <br />
          <br />
          <Button type="submit" value="">
            Booking Confirm
          </Button>
        </form>
      </div>
    </section>
  );
};

export default BookNow;
