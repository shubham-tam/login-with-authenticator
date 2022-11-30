import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import cart from "..//assets/icon/cart.png";
import { Cart } from "./Cart";

import classes from "..//assets/style/nav.module.css";
import "../App.css";

export const NavBar = () => {
  const [showCart, setShowCart] = useState(false);

  const cartToggler = () => {
    showCart ? setShowCart(false) : setShowCart(true);
  };

  return (
    <>
      <div>
        <ul>
          {/* <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li> */}

          <li style={{ float: "right" }}>
            <li>
              <button onClick={cartToggler}>
                <img src={cart} alt="cart" className={classes.cartImg} />
              </button>

              {showCart && <Cart />}
            </li>
            <NavLink
              to="/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.end}
            >
              {" "}
              Log Out
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
