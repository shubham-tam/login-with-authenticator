import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Rating from "@mui/material/Rating";

import classes from "../assets/style/productPage.module.css";
import modalCss from "../assets/style/commonModalPage.module.css";

import axios from "../Common/axios";
import { Form } from "../Common/Form";
import { NavBar } from "../Components/NavBar";
import { Footer } from "../Components/Footer";
import { CommentsPage } from "../Components/CommentsPage";
import { DummyColorProductsAndSize } from "../Components/DummyColorProducts";

export const ProductPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const modalToggler = () => {
    setModalIsOpen((prevState) => !prevState);
  };

  const { id } = useParams();
  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    const fetchProductInformation = async () => {
      try {
        const res = await axios.get(`/${id}`);
        setProductInfo(res.data);
        toast.success("Product information loaded");
      } catch (err) {
        toast.error("Something wrong with the api");
      }
    };
    fetchProductInformation();
  }, [id]);

  return (
    <>
      <NavBar />
      <div className={classes.container}>
        <div className={classes.product}>
          <div>
            <img src={productInfo.image} alt="" className={classes.image} />
          </div>
          <div className={classes["more-info"]}>
            <div className={classes.nameAndCategory}>
              <h2>{productInfo?.title}</h2>
              <h5>
                (
                {productInfo?.category?.charAt(0).toUpperCase() +
                  productInfo?.category?.slice(1)}
                )
              </h5>
              <div className={classes.modal}>
                <button onClick={modalToggler}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24px"
                    height="24px"
                    className={classes.icons}
                  >
                    <path d="M21,12a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h6a1,1,0,0,0,0-2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM6,12.76V17a1,1,0,0,0,1,1h4.24a1,1,0,0,0,.71-.29l6.92-6.93h0L21.71,8a1,1,0,0,0,0-1.42L17.47,2.29a1,1,0,0,0-1.42,0L13.23,5.12h0L6.29,12.05A1,1,0,0,0,6,12.76ZM16.76,4.41l2.83,2.83L18.17,8.66,15.34,5.83ZM8,13.17l5.93-5.93,2.83,2.83L10.83,16H8Z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className={classes.rating}>
              <h4> {productInfo?.rating?.rate}</h4>
              <Rating
                name="read-only"
                value={
                  Number(productInfo?.rating?.rate)
                    ? Number(productInfo?.rating?.rate)
                    : Number()
                }
                readOnly
                precision={0.1}
              />
              <h4 className={classes.rateNum}>
                {" "}
                <small>{productInfo?.rating?.count}+ reviews</small>
              </h4>
            </div>
            <div className={classes.description}>
              <h4> About this item</h4>
              {productInfo?.description?.charAt(0).toUpperCase() +
                productInfo?.description?.slice(1)}
            </div>
            <div className={classes.priceAndAddToCart}>
              ${productInfo?.price}
            </div>
            <DummyColorProductsAndSize />
          </div>
        </div>
        <CommentsPage />
      </div>
      <Footer />
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
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        className={modalCss.modalPage}
      >
        <button onClick={modalToggler} className={modalCss.modalButton}>
          x
        </button>
        <Form id={id} info={productInfo} />
      </Modal>
    </>
  );
};
