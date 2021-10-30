import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { configs } from "../../../../configs";

import useAuth from "../../../../hooks/useAuth";
const AddTours = () => {
  const { firebaseData } = useAuth();
  const { user } = firebaseData;
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    if (user.email !== "mahabubemon24@gmail.com") {
      return alert(
        "Sorry, You can't Add Tour Package. Only Admin could Add a Tour Package."
      );
    }

    axios
      .post(`${configs.SERVER_URI}/tours`, data)
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
        />{" "}
        <br />
        <textarea {...register("description")} placeholder="Description" />{" "}
        <br />
        <input type="number" {...register("price")} placeholder="price" />{" "}
        <br />
        <input {...register("image")} placeholder="image url" /> <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddTours;
