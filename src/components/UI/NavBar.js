import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import cart from "..//..//assets/icon/cart.png";
import { Cart } from "./Cart";
import classes from "..//..//assets/style/nav.module.css";
import "..//..//App.css";

export const NavBar = () => {
  const [showCart, setShowCart] = useState(false);

  const cartToggler = () => {
    showCart ? setShowCart(false) : setShowCart(true);
  };

  return (
    <>
      <div>
        <ul>
          <li style={{ float: "right" }}>
            <NavLink className={classes.listItems}>
              <button onClick={cartToggler} className={classes.btn}>
                <img src={cart} alt="cart" className={classes.cartImg} />
              </button>

              {showCart && <Cart />}
            </NavLink>
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
