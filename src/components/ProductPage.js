import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import classes from "..//assets/style/productList.module.css";
import axios from "../axios";
import { NavBar } from "./NavBar";

export const ProductPage = () => {
  const { id } = useParams();
  const [info, setInfo] = useState({});

  useEffect(() => {
    const fetchProductInformation = async () => {
      try {
        const res = await await axios.get(`/${id}`);
        setInfo(res.data);
        toast.success("Product information loaded");
      } catch (err) {
        toast.error("something wrong with the api");
      }
    };
    fetchProductInformation();
  }, [id]);

  console.log(info);

  return (
    <>
      <NavBar />
      <div className={classes.body}>
        <div className={classes.product}>
          <div>
            <img src={info.image} alt="" className={classes.image} />
          </div>
          <div className={classes["more-info"]}>
            <div>{info?.price}</div>
            <div>{info?.title}</div>
            <div>{info?.description}</div>
            <div>{info?.category}</div>

            <div>{info.rating?.count}</div>
            <div>{info.rating?.rate}</div>
          </div>
        </div>
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
    </>
  );
};
