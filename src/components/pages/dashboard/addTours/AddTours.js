import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
// import useAuth from "../../../../hooks/useAuth";

const AddTours = () => {
  // const { firebaseData } = useAuth();
  // const { user } = firebaseData;
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    /*
    if(user.email !== "mahabubemon24@gmail.com") {
        return alert("Sorry, You can't Add Tour Package. Only Admin could Add a Tour Package.")
    } */

    axios
      .post("https://ghurbo-tourism.herokuapp.com/tours", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added successfully");
          reset();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h2>Add a Tour Package</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Name"
        />
        <br /> <br />
        <textarea {...register("description")} placeholder="Description" />{" "}
        <br />
        <br />
        <input type="number" {...register("price")} placeholder="price" />
        <br />
        <br />
        <input {...register("image")} placeholder="image url" /> <br />
        <br />
        <input type="submit" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default AddTours;
