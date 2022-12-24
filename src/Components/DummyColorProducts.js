import React from "react";

import classes from "..//assets/style/dummyColorProductsAndSize.module.css";

export const DummyColorProductsAndSize = () => {
  return (
    <div>
      <div className={classes["additional-details"]}>
        <div className={classes.details}>
          Colors : <div className={classes.colorBox1}></div>
          <div className={classes.colorBox2}></div>
          <div className={classes.colorBox3}></div>
          <div className={classes.colorBox4}></div>
        </div>

        <div className={classes.details}>
          Size :<div className={classes.sizeBox}> S </div>
          <div className={classes.sizeBox}> M </div>
          <div className={classes.sizeBox}> L</div>
          <div className={classes.sizeBox}> XL</div>
        </div>
      </div>
    </div>
  );
};
