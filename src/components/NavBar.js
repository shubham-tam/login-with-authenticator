import React from "react";
import { Link } from "react-router-dom";
import cart from "..//assets/icon/cart.png";

import classes from "..//assets/style/nav.module.css";
import "../App.css";

export const NavBar = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>

          <li style={{ float: "right" }}>
            <li>
              <img src={cart} alt="cart" className={classes.cartImg} />
            </li>
            <Link
              to="/"
              // target="_blank"
              // rel="noopener noreferrer"
              className={classes.end}
            >
              {" "}
              Log Out
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
