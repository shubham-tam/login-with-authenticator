import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Modal from "react-modal";

import classes from "..//assets/style/table.module.css";
import modalCss from "..//assets/style/commonModalPage.module.css";

import { Form } from "../Common/Form";
import { DeleteItem } from "../Common/DeleteItem";
import { ProductPage } from "../Pages/ProductPage";

export const Table = () => {
  const [products, setProducts] = useState([]);
  const [productInfo, setProductInfo] = useState({});
  const data = useRef([]);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const modalToggler = () => {
    setModalIsOpen((prevState) => !prevState);
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
    console.log("test");
    fetchData();

    if (products.includes(productInfo)) {
      data.current = productInfo;
    }
  }, [productInfo]);

  const handler = (info) => {
    setProductInfo(info);
  };

  if (products.includes(productInfo)) {
    data.current = productInfo;
  }

  return (
    <>
      <div>
        <table className={classes.table}>
          <tbody>
            <tr style={{ backgroundColor: "#003049", color: "#fff" }}>
              <th>Product ID</th>
              <th>Product Title</th>
              <th>Actions</th>
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
                      className={classes.links}
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
                        className={classes.linksTitle}
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
                        onClick={modalToggler}
                        className={classes.tableButtons}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24px"
                          height="24px"
                          className={classes.icons}
                          onClick={() => handler(item)}
                        >
                          <path d="M21,12a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h6a1,1,0,0,0,0-2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM6,12.76V17a1,1,0,0,0,1,1h4.24a1,1,0,0,0,.71-.29l6.92-6.93h0L21.71,8a1,1,0,0,0,0-1.42L17.47,2.29a1,1,0,0,0-1.42,0L13.23,5.12h0L6.29,12.05A1,1,0,0,0,6,12.76ZM16.76,4.41l2.83,2.83L18.17,8.66,15.34,5.83ZM8,13.17l5.93-5.93,2.83,2.83L10.83,16H8Z" />
                        </svg>
                      </button>

                      <button className={classes.tableButtons}>
                        <DeleteItem id={item?.id} title={item.title} />
                      </button>
                    </td>
                  </tr>
                  <Modal
                    isOpen={modalIsOpen}
                    ariaHideApp={false}
                    className={modalCss.modalPage}
                  >
                    <button
                      onClick={modalToggler}
                      className={modalCss.modalButton}
                    >
                      x
                    </button>
                    <Form info={data.current} />
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
