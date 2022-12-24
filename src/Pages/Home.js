import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import classes from "../assets/style/home.module.css";
import "../App.css";

import { Item } from "../Components/Item";
import { NavBar } from "../Components/NavBar";
import { Footer } from "../Components/Footer";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [showFooter, setShowFooter] = useState(false);

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

  useEffect(() => {
    setInterval(() => {
      setShowFooter(true);
    }, 1000);
  }, []);

  return (
    <>
      <NavBar />
      <div className={classes.components}>
        <div>
          <h1
            style={{
              color: "#d62828",
              backgroundColor: "#f0edee",
              textAlign: "center",
              padding: "40px",
            }}
          >
            {" "}
            Product List{" "}
          </h1>
          <div className={classes.listItems}>
            {products.map((item) => {
              return (
                <li key={item.id}>
                  <Item id={item.id} item={item} />
                </li>
              );
            })}
          </div>
        </div>
        {showFooter && <Footer />}
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
