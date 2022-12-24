import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import classes from "..//assets/style/login.module.css";

import App from "../App";

const LoginWithLocalStorage = () => {
  const email = useRef();
  const password = useRef();
  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (value) => {
      if (
        email.current.value === "aricalot@gmail.com" &&
        password.current.value === "TEST@123"
      ) {
        localStorage.setItem("emailData", "aricalot@gmail.com");
        localStorage.setItem("passwordData", "TEST@123");
      }
    },
  });

  return (
    <div>
      {getEmail && getPassword ? (
        <App />
      ) : (
        <>
          <form action="" className={classes.body}>
            <div className={classes["login-container"]}>
              <div className={classes.inputs}>
                <h3> Login to your account </h3>
                <input
                  ref={email}
                  name="email"
                  type="email"
                  id="email"
                  label="Product Title"
                  placeholder="Enter your username"
                  onChange={(e) => formik.handleChange(e)}
                />
                {formik.touched.email && formik.errors.email ? (
                  <span className={classes.error}>{formik.errors.email}</span>
                ) : null}
                <input
                  ref={password}
                  name="password"
                  type="password"
                  id="password"
                  label="Product Title"
                  placeholder="Enter your password"
                  onChange={(e) => formik.handleChange(e)}
                />
                {formik.touched.password && formik.errors.password ? (
                  <span className={classes.error}>
                    {formik.errors.password}
                  </span>
                ) : null}
                <button
                  onClick={(e) => formik.handleSubmit(e)}
                  className={classes.btn}
                >
                  {" "}
                  Login
                </button>
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  );
};
export default LoginWithLocalStorage;
