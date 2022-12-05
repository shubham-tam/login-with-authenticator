import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import classes from "..//..//assets/style/productPage.module.css";
import axios from "../../axios";
import { NavBar } from "..//UI/NavBar";
import Rating from "@mui/material/Rating";
import edit from "..//..//assets/icon/edit48.png";
import { Form } from "..//Constant/Form";
import { Footer } from "./Footer";
import { CommentsPage } from "../UI/CommentsPage";
import { DummyColorProductsAndSize } from "../UI/DummyColorProducts";

export const ProductPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

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
              <div className={classes.modal}>
                <button onClick={setModalIsOpenToTrue}>
                  <img src={edit} alt="" />
                </button>
              </div>
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
        className={classes.modalPage}
      >
        <button onClick={setModalIsOpenToFalse} className={classes.modalButton}>
          x
        </button>
        <Form id={id} info={info} />
      </Modal>
    </>
  );
};
