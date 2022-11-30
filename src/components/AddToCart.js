import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "../axios";

export const AddToCart = () => {
  const [addItem, setAddItem] = useState({});

  //   const itemToggler = useEffect(() => {
  //     const addItemToCart = async () => {
  //       try {
  //         const res = await axios.fetch("https://fakestoreapi.com/products", {
  //           method: "POST",
  //           body: JSON.stringify({
  //             title: "test product",
  //             price: 13.5,
  //             description: "lorem ipsum set",
  //             image: "https://i.pravatar.cc",
  //             category: "electronic",
  //           }),
  //         });
  //         setAddItem(res);
  //         toast.success("Item added to cart");
  //       } catch (err) {
  //         toast.error("something wrong with the api");
  //       }
  //     };
  //     addItemToCart();
  //   }, []);
  //   console.log(addItem);

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
      <button onClick={add}> Add to cart</button>
    </div>
  );
};
