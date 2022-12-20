import { useState, useEffect } from "react";
import Modal from "react-modal";

import classes from "..//..//assets/style/adminDashboard.module.css";
import modalCss from "..//..//assets/style/commonModalPage.module.css";
import add from "..//../assets/icon/add.png";

import { NavBar } from "../UI/NavBar";
import { Form } from "../Constant/Form";
import { Table } from "./Table";
import { Footer } from "./Footer";

export const AdminDashboard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  const modalToggler = () => {
    setModalIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    setInterval(() => {
      setShowFooter(true);
    }, 1000);
  }, []);

  return (
    <>
      <NavBar />
      <div>
        <div className={classes.body}>
          <div className={classes.addNTable}>
            <div className={classes.btnDiv}>
              <button
                onClick={modalToggler}
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
          </div>
        </div>
      </div>

      <br />
      <br />
      {showFooter && <Footer />}

      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        className={modalCss.modalPage}
      >
        <button onClick={modalToggler} className={modalCss.modalButton}>
          x
        </button>
        <Form />
      </Modal>
    </>
  );
};
