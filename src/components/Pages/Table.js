import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { ProductPage } from "./ProductPage";
import classes from "..//..//assets/style/table.module.css";
import edit from "..//..//assets/icon/edit48.png";
import { Form } from "../Constant/Form";
import Modal from "react-modal";
import { DeleteItem } from "../Actions/DeleteItem";
import { color } from "@mui/system";

export const Table = () => {
  const [products, setProducts] = useState([]);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

  const fetchData = (status) => {
    new Promise((resolve) => {
      fetch("https://fakestoreapi.com/products/")
        .then((res) => res.json())
        .then((data) => {
          setTimeout(() => resolve(data), 10);
          if (status !== 200) {
            setProducts(data);
            toast.success("Products loaded");
          } else {
            toast.error("Wrong api request");
          }
        });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className={classes.body}>
        <table className={classes.table}>
          <tbody>
            <tr
              className={classes.tableRowData}
              style={{ backgroundColor: "#dee2e6" }}
            >
              <th>Product ID </th>
              <th>Product Title</th>
              <th>Options</th>
            </tr>

            {products.map((item) => {
              return (
                <>
                  <tr key={item.id}>
                    <td
                      style={
                        item.id % 2 === 0
                          ? { backgroundColor: "#dee2e6" }
                          : { backgroundColor: "#e9ecef" }
                      }
                    >
                      {item.id}
                    </td>
                    <td
                      style={
                        item.id % 2 === 0
                          ? { backgroundColor: "#dee2e6" }
                          : { backgroundColor: "#e9ecef" }
                      }
                    >
                      <Link
                        to={`/` + item.id}
                        element={<ProductPage />}
                        className={classes.links}
                      >
                        {item.title}
                      </Link>
                    </td>
                    <td
                      style={
                        item.id % 2 === 0
                          ? { backgroundColor: "#dee2e6" }
                          : { backgroundColor: "#e9ecef" }
                      }
                    >
                      <button
                        onClick={setModalIsOpenToTrue}
                        className={classes.tableButtons}
                      >
                        <img src={edit} alt="" />
                      </button>

                      <button className={classes.tableButtons}>
                        <DeleteItem id={item?.id} title={item.title} />
                      </button>
                    </td>
                  </tr>
                  <Modal
                    isOpen={modalIsOpen}
                    ariaHideApp={false}
                    className={classes.modalPage}
                  >
                    <button
                      onClick={setModalIsOpenToFalse}
                      className={classes.button}
                    >
                      x
                    </button>
                    <Form id={item?.id} info={item} />
                  </Modal>
                </>
              );
            })}
          </tbody>
        </table>
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
