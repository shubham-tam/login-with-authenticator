import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import classes from "..//..//assets/style/home.module.css";
import "..//..//App.css";
import { Item } from "../UI/Item";
import "..//..//assets/style/style.css";
import { NavBar } from "..//UI/NavBar";

export const Home = () => {
  const [products, setProducts] = useState([]);

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
      <NavBar />
      <div style={{ backgroundColor: "#f0edee" }}>
        <h1> Product List </h1>
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
