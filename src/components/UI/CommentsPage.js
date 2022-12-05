import React from "react";
import classes from "..//..//assets/style/commentPage.module.css";
import user from "..//..//assets/icon/user.png";
import cena from "..//..//assets/icon/cena.png";

export const CommentsPage = () => {
  return (
    <>
      <div className={classes.center}>
        <h3>Customer questions and answer</h3>
        <div className={classes.box}>
          <img src={cena} alt="" />
          <h5 className={classes.buyer}> John Cena:</h5>{" "}
          <h5> Awesome Product</h5>
        </div>
        <div className={classes.box}>
          <img src={user} alt="" />
          <div className={classes.multipleComments}>
            <div className={classes.multipleCommentsBox}>
              <h5 className={classes.buyer}> Anonymous:</h5>{" "}
              <h5>Is this available? </h5>
            </div>
            <div className={classes.multipleCommentsBox}>
              <h5 className={classes.seller}> Seller:</h5>{" "}
              <h6>Yes, Please contact us on.. </h6>
            </div>
          </div>
        </div>
        <div className={classes.box}>
          <img src={user} alt="" />
          <div className={classes.multipleComments}>
            <div className={classes.multipleCommentsBox}>
              <h5 className={classes.buyer}> Anonymous:</h5>{" "}
              <h5>How can I contact the seller? </h5>
            </div>
            <div className={classes.multipleCommentsBox}>
              <h5 className={classes.seller}> Seller:</h5>{" "}
              <h6>Please find us on ... </h6>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
