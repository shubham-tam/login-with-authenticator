import React from "react";
import { useFormik } from "formik";
import classes from "..//..//assets/style/form.module.css";
import * as Yup from "yup";
import { toast } from "react-toastify";

export const Form = (id) => {
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
      title: Yup.string().required("Product Title is required."),
      price: Yup.number().required("Product Price is required"),
      image: Yup.string().required("Product Image url is required"),
      description: Yup.string().required("Product Description is required"),
      category: Yup.string().required("Product Category is required"),
    }),

    onSubmit: async (values) => {
      if (id?.info?.id) {
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
            category: values.category,
          }),
        });
      }
    },
  });

  return (
    <>
      <form>
        <div className={classes.form}>
          {id?.info?.title ? (
            <h2> {id?.info?.title || ""}</h2>
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
          {formik.touched.title && formik.errors.title ? (
            <span className={classes.error}>{formik.errors.title}</span>
          ) : null}

          <input
            name="price"
            type="number"
            id="price"
            label="Product Price"
            placeholder="Enter the price of the product"
            value={formik.values.price}
            onChange={(e) => formik.handleChange(e)}
          />
          {formik.touched.price && formik.errors.price ? (
            <span className={classes.error}>{formik.errors.price}</span>
          ) : null}

          <input
            name="image"
            type="text"
            id="image"
            label="Product Images"
            placeholder="Please provide image urls"
            value={formik.values.image}
            onChange={(e) => formik.handleChange(e)}
          />

          {formik.touched.image && formik.errors.image ? (
            <span className={classes.error}>{formik.errors.image}</span>
          ) : null}

          <textarea
            name="description"
            type="text"
            id="description"
            label="Product Description"
            placeholder="Product description"
            value={formik.values.description}
            onChange={(e) => formik.handleChange(e)}
          />
          {formik.touched.description && formik.errors.description ? (
            <span className={classes.error}>{formik.errors.description}</span>
          ) : null}

          <input
            name="category"
            type="text"
            id="category"
            label="Product Category"
            placeholder="Enter the category of the product"
            value={formik.values.category}
            onChange={(e) => formik.handleChange(e)}
          />
          {formik.touched.category && formik.errors.category ? (
            <span className={classes.error}>{formik.errors.category}</span>
          ) : null}

          {id?.id ? (
            <button
              onClick={(e) => formik.handleSubmit(e)}
              type="buton"
              className={classes.formBtn}
            >
              Update product
            </button>
          ) : (
            <button
              onClick={(e) => formik.handleSubmit(e)}
              type="buton"
              className={classes.formBtn}
            >
              Add Product
            </button>
          )}
        </div>
      </form>
    </>
  );
};
