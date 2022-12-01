import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import classes from "..//..//assets/style/productList.module.css";
import axios from "../../axios";
import { NavBar } from "..//UI/NavBar";
import Rating from "@mui/material/Rating";
// import { AddToCart } from "./AddToCart";

export const ProductPage = () => {
  const { id } = useParams();
  const [info, setInfo] = useState({});

  useEffect(() => {
    const fetchProductInformation = async () => {
      try {
        const res = await axios.get(`/${id}`);
        setInfo(res.data);
        toast.success("Product information loaded");
      } catch (err) {
        toast.error("Something wrong with the api");
      }
    };
    fetchProductInformation();
  }, [id]);

  // console.log(info);

  return (
    <>
      <NavBar />
      <div className={classes.container}>
        <div className={classes.product}>
          <div>
            <img src={info.image} alt="" className={classes.image} />
          </div>
          <div className={classes["more-info"]}>
            <div className={classes.nameAndCategory}>
              <h2>{info?.title}</h2>
              <h5>
                (
                {info?.category?.charAt(0).toUpperCase() +
                  info?.category?.slice(1)}
                )
              </h5>
            </div>
            <div className={classes.rating}>
              <h4> {info?.rating?.rate}</h4>
              <Rating
                name="read-only"
                value={
                  Number(info?.rating?.rate)
                    ? Number(info?.rating?.rate)
                    : Number()
                }
                readOnly
                precision={0.1}
              />
              <h4 className={classes.rateNum}>
                {" "}
                <small>{info?.rating?.count}+ reviews</small>
              </h4>
            </div>
            <div className={classes.description}>
              <h4> About this item</h4>
              {info?.description?.charAt(0).toUpperCase() +
                info?.description?.slice(1)}
            </div>
            <div className={classes.priceAndAddToCart}>${info?.price}</div>

            {/* <AddToCart id={id} /> */}
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <h3>INSERT FAKE REVIEWS</h3>
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
