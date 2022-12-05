import { useState, useEffect } from "react";
import { NavBar } from "../UI/NavBar";
import Modal from "react-modal";
import { Form } from "../Constant/Form";
import add from "..//../assets/icon/add.png";
import { Table } from "./Table";
import classes from "..//..//assets/style/adminDashboard.module.css";
import { Footer } from "./Footer";

export const AdminDashboard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    setInterval(() => {
      setShowFooter(true);
    }, 1000);
  }, []);

  return (
    <>
      <NavBar />
      <div className={classes.body}>
        <button
          onClick={setModalIsOpenToTrue}
          style={{ cursor: "pointer" }}
          className={classes.editBtn}
        >
          <div>
            Add new: <img src={add} alt="Add new product button" />
          </div>
        </button>
        <Table />
        <br />
        <br />
        {showFooter && <Footer />}
      </div>

      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        className={classes.modalPage}
      >
        <button onClick={setModalIsOpenToFalse} className={classes.modalButton}>
          x
        </button>
        <Form />
      </Modal>
    </>
  );
};
