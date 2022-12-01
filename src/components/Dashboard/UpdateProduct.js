import React from "react";
import classes from "..//..//assets/style/updateProduct.module.css";
import * as Yup from "yup";

import { ToastContainer, toast } from "react-toastify";
import { useFormik } from "formik";

export const UpdateProduct = (id) => {
  // console.log("id", id);
  // console.log("name", id?.info?.title);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: id?.info?.title || "",
      price: id?.info?.price || "",
      description: id?.info?.description || "",
      image: id?.info?.image || "",
      category: id?.info?.category || "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      price: Yup.number().required("Required"),
      image: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
      category: Yup.string().required("Required"),
    }),

    onSubmit: async (values) => {
      console.log("submitted");

      await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          title: values.title,
          price: values.price,
          description: values.description,
          image: values.image,
          category: values.category,
        }),
      });
      toast
        .success("Your product has been updated, please check the payload tab.")
        .then((res) => res.json())
        .then((json) => console.log(json));
    },
  });

  console.log(formik.errors);

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className={classes.form}>
          <input
            label="Product Title"
            id="title"
            value={formik.values.title}
            name="title"
            type="text"
            placeholder="Enter the name of the product"
            onChange={(e) => formik.handleChange(e)}
          />

          <input
            label="Product Price"
            value={formik.values.price}
            id="price"
            name="price"
            type="number"
            placeholder="Enter the price of the product"
            onChange={(e) => formik.handleChange(e)}
          />

          <input
            label="Product Images"
            id="image"
            name="image"
            value={formik.values.image}
            type="text"
            placeholder="Please provide image urls"
            onChange={(e) => formik.handleChange(e)}
          />

          <input
            label="Product Description"
            name="description"
            value={formik.values.description}
            id="description"
            type="text"
            placeholder="Product description"
            className={classes.descriptionBox}
            onChange={(e) => formik.handleChange(e)}
          />

          <input
            label="Product Category"
            name="category"
            id="category"
            type="text"
            placeholder="Enter the category of the product"
            onChange={(e) => formik.handleChange(e)}
          />

          <button onClick={(e) => formik.handleSubmit(e)} type="buton">
            Submit
          </button>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </form>
    </>
  );
};
