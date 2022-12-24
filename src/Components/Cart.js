import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import classes from "..//assets/style/cart.module.css";

import axios from "../Common/axios";

export const Cart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/carts/4");
        setCart(res);
        toast.success("Cart Loaded");
      } catch (err) {
        toast.error("something wrong with the api");
      }
    };
    fetchCartItems();
  }, []);

  return (
    <>
      <div className={classes.container}>
        <h3 className={classes.heading}>Your items </h3>
        <h4> {cart?.data?.date}</h4>
      </div>
    </>
  );
};
