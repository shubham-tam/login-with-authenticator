import React, { useState } from "react";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classes from "..//assets/style/login.module.css";

async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export const Login = ({ setToken }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (setUserName || setPassword === "") {
      toast.error("Your input fields are emtpy!");
    }
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };

  return (
    <div className={classes.body}>
      <div className={classes["login-container"]}>
        <form id="form" onSubmit={handleSubmit} className={classes.form}>
          <h2 className={classes.header}> Please Log In </h2>
          <div className={classes["form-control"]}>
            <label>
              <input
                type="text"
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter username"
              />
            </label>
          </div>
          <div className={classes["form-control"]}>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
