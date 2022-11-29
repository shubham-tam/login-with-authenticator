import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import classes from "../assets/style/home.module.css";
import "..//App.css";
import { Item } from "./Item";
import "../assets/style/style.css";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

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

  // console.log(products);

  useEffect(() => {
    toast.promise(fetchData, {
      pending: "Loading Products",
      success: "Products Loaded",
      error: "error",
    });
  }, []);

  return (
    <>
      <NavBar />
      <h1 style={{ backgroundColor: "#f0edee", color: "#3498db" }}>
        {" "}
        Product List{" "}
      </h1>
      <div className={classes.listItems}>
        {products.map((item) => {
          return (
            <li key={item.id} className={classes.list}>
              <Item
                id={item.id}
                item={item}
                isActive={isActive}
                setIsActive={setIsActive}
              />
            </li>
          );
        })}
      </div>
      {/* {products && <Footer />} */}

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
