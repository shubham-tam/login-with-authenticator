import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import cart from "..//..//assets/icon/cart.png";
import classes from "..//..//assets/style/nav.module.css";
import "..//..//App.css";

import { Cart } from "./Cart";

export const NavBar = () => {
  const [showCart, setShowCart] = useState(false);
  let location = useLocation();

  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  };

  const cartToggler = () => {
    showCart ? setShowCart(false) : setShowCart(true);
  };

  return (
    <>
      <div>
        <ul>
          {location.pathname === "/" ? (
            <NavLink to="/Admin" className={classes.left}>
              {" "}
              Admin Dashboard
            </NavLink>
          ) : (
            <NavLink to="/" className={classes.left}>
              {" "}
              Home
            </NavLink>
          )}

          <li style={{ float: "right" }}>
            <NavLink className={classes.listItems}>
              <button onClick={cartToggler} className={classes.btn}>
                <img src={cart} alt="cart" className={classes.cartImg} />
              </button>
              {showCart && <Cart />}
            </NavLink>

            <button onClick={handleClick} className={classes.end}>
              {" "}
              Logout
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};
