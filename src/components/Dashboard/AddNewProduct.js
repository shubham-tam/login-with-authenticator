import React from "react";
import classes from "..//..//assets/style/addNewProduct.module.css";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={classes.error}>{meta.error}</div>
      ) : null}
    </>
  );
};

export const AddNewProduct = () => {
  return (
    <>
      <Formik
        initialValues={{
          title: "",
          price: "",
          description: "",
          image: "",
          category: "",
        }}
        validationSchema={Yup.object({
          title: Yup.string()
            .min(5, "Must be atleast 5 characters")
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          price: Yup.number()
            // .min(2, "lol")
            // .max(20, "Cant be a lot, can it?")
            .required("Required"),
          image: Yup.string().required("Required"),
          description: Yup.string()
            .min(10, "Must be atleast 5 characters")
            .max(100, "Must be 15 characters or less")
            .required("Required"),
          catetgory: Yup.string()
            .min(3, "Must be atleast 5 characters")
            .max(15, "Must be 15 characters or less")
            .required("Required"),
        })}
        onSubmit={async (title, price, image, description, category) => {
          await fetch("https://fakestoreapi.com/products", {
            method: "POST",
            body: JSON.stringify({
              title: { ...title },
              price: { ...price },
              description: { ...description },
              image: { ...image },
              category: { ...category },
            }),
          });
          toast
            .success("New product added, please check the payload tab.")
            .then((res) => res.json())
            .then((json) => console.log(json));
        }}
      >
        <Form>
          <div className={classes.form}>
            <MyTextInput
              label="Product Title"
              name="title"
              type="text"
              placeholder="Enter the name of the product"
            />

            <MyTextInput
              label="Product Price"
              name="price"
              type="number"
              placeholder="Enter the price of the product"
            />

            <MyTextInput
              label="Product Images"
              name="image"
              type="text"
              placeholder="Please provide image urls"
            />

            <MyTextInput
              label="Product Description"
              name="description"
              type="text"
              placeholder="Product description"
              className={classes.descriptionBox}
            />

            <MyTextInput
              label="Product Category"
              name="catetgory"
              type="text"
              placeholder="Enter the category of the product"
            />

            <button type="submit">Submit</button>
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
        </Form>
      </Formik>
    </>
  );
};
