import { useState, useEffect } from "react";
import { NavBar } from "../UI/NavBar";
import Modal from "react-modal";
import { Form } from "../Constant/Form";
import add from "..//../assets/icon/add.png";
import { Table } from "./Table";
import classes from "..//..//assets/style/adminDashboard.module.css";
import { Footer } from "./Footer";
import modalCss from "..//..//assets/style/commonModalPage.module.css";

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
        <div className={classes.addNTable}>
          <button
            onClick={setModalIsOpenToTrue}
            style={{ cursor: "pointer" }}
            className={classes.addBtn}
          >
            <div className={classes.addProductWithIcon}>
              <h3>Add new product</h3>
              <img src={add} alt="Add new product button" />
            </div>
          </button>
        </div>
        <Table />
        <br />
        <br />
      </div>
      {showFooter && <Footer />}

      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        className={modalCss.modalPage}
      >
        <button
          onClick={setModalIsOpenToFalse}
          className={modalCss.modalButton}
        >
          x
        </button>
        <Form />
      </Modal>
    </>
  );
};
