import React, { useState } from "react";
import classes from "..//..//assets/style/addToCart.module.css";
import axios from "../../axios";
import { ToastContainer, toast } from "react-toastify";
import { NavBar } from "../UI/NavBar";

export const AddNewProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState("");
  const [category, setCategory] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    console.warn(name, description, price, category);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("file", file);
    formData.append("category", category);

    try {
      let results = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      toast.success("New Product added");
      console.log(results);
    } catch (err) {
      toast.error("Something wrong with the api. Couldn't add product");
    }
  };

  return (
    <>
      <NavBar />
      <form onSubmit={onSubmit}>
        <div className={classes.form}>
          <h3>AddNewProduct</h3>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter the Product Name"
          />
          <input
            type="number"
            placeholder="Enter the Product Price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="file"
            placeholder="Enter the Image"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Enter the Product Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter the Product Category"
            onChange={(e) => setCategory(e.target.value)}
          />
          <button> Add Product</button>
        </div>
      </form>
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
    </>
  );
};
