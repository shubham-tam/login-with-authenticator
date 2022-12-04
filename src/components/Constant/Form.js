import React from "react";
import { useFormik } from "formik";
import classes from "..//..//assets/style/updateProduct.module.css";
import * as Yup from "yup";
import { toast } from "react-toastify";

export const Form = (id) => {
  // console.log(info);

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
      title: Yup.string().required("Title is required."),
      price: Yup.number().required("Required"),
      image: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
      category: Yup.string().required("Required"),
    }),

    onSubmit: async (values) => {
      console.log("values here", values);
      console.log("idddddd here", id?.info?.id);
      console.log("innside the console of onSubmit loop");

      if (id?.info?.id) {
        console.log("checking id inside loop");
        await fetch(`https://fakestoreapi.com/products/${id.info.id}`, {
          method: "PATCH",
          body: JSON.stringify({
            title: values.title,
            price: values.price,
            description: values.description,
            image: values.image,
            category: values.category,
          }),
        });
        toast.success(`${values.title} updated, please check the payload tab.`);
      } else {
        console.log("else");
        await fetch("https://fakestoreapi.com/products", {
          method: "POST",
          body: JSON.stringify({
            title: values.title,
            price: values.price,
            description: values.description,
            image: values.image,
            category: values.catgory,
          }),
        });
      }
    },
  });

  // console.log(formik.errors);

  return (
    <>
      <form>
        <div className={classes.form}>
          {id?.info?.title ? (
            <h2> Currently Editing : {id?.info?.title || ""}</h2>
          ) : (
            <h2> Add a product</h2>
          )}

          <input
            name="title"
            type="text"
            id="title"
            label="Product Title"
            placeholder="Enter the name of the product"
            value={formik.values.title}
            onChange={(e) => formik.handleChange(e)}
          />
          <input
            name="price"
            type="number"
            id="price"
            label="Product Price"
            placeholder="Enter the price of the product"
            value={formik.values.price}
            onChange={(e) => formik.handleChange(e)}
          />
          <input
            name="image"
            type="text"
            id="image"
            label="Product Images"
            placeholder="Please provide image urls"
            value={formik.values.image}
            onChange={(e) => formik.handleChange(e)}
          />
          <input
            name="description"
            type="text"
            id="description"
            label="Product Description"
            placeholder="Product description"
            value={formik.values.description}
            onChange={(e) => formik.handleChange(e)}
            // className={classes.descriptionBox}
          />
          <input
            name="category"
            type="text"
            id="category"
            label="Product Category"
            placeholder="Enter the category of the product"
            value={formik.values.category}
            onChange={(e) => formik.handleChange(e)}
          />
          <button
            onClick={(e) => formik.handleSubmit(e)}
            type="buton"
            style={{ cursor: "pointer" }}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};
