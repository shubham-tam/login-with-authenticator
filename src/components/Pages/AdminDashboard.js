import { useState } from "react";
import { NavBar } from "../UI/NavBar";
import Modal from "react-modal";
import { Form } from "../Constant/Form";
import add from "..//../assets/icon/add.png";
import { Table } from "./Table";
import classes from "..//..//assets/style/adminDashboard.module.css";

export const AdminDashboard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

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
      </div>
      <Modal isOpen={modalIsOpen} ariaHideApp={false}>
        <button onClick={setModalIsOpenToFalse}>x</button>
        <Form />
      </Modal>
    </>
  );
};
