import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import classes from "../assets/style/home.module.css";
import "..//App.css";
import { Item } from "./Item";
import "../assets/style/style.css";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [isActive, setIsActive] = useState();

  const fetchData = new Promise((resolve) => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => resolve(data), 10);
        setProducts(data);
      });
  });

  useEffect(() => {
    toast.promise(fetchData, {
      pending: "Loading Products",
      success: "Products Loaded",
      error: "error",
    });
  }, []);

  return (
    <>
      <div className={classes.listItems}>
        {products.map((item, id) => {
          return (
            <li key={item.id} className={classes.list}>
              <Item
                id={id}
                item={item}
                isActive={isActive}
                setIsActive={setIsActive}
              />
            </li>
          );
        })}
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
