import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "../axios";
import classes from "..//assets/style/addToCart.module.css";

export const AddNewProduct = () => {
  const [addItem, setAddItem] = useState({});

  const add = () => {
    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      }),
    })
      .then((res) => res.json())
      //   .then((item) => setAddItem(item))
      .then((json) => console.log(json));
  };
  return (
    <div>
      <button onClick={add} className={classes.btn}>
        {" "}
        Add to cart
      </button>
    </div>
  );
};
