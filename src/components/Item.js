import { Link } from "react-router-dom";
import cart from "..//assets/icon/cart.png";
import Rating from "@mui/material/Rating";

import classes from "..//assets/style/item.module.css";

export const Item = ({ item, id }) => {
  const { price, title, image, rating } = item;

  // const toggler = () => {
  //   if (id === isActive) {
  //     setIsActive();
  //   } else {
  //     setIsActive(id);
  //   }
  // };

  return (
    <>
      <div className={classes.item}>
        <div className={classes.imgBg}>
          <img src={image} alt="" className={classes.image} />
        </div>
        <div className={`${classes.titlePrice} ${classes.alignment}`}>
          <Link to={`${id}`} target="_blank" rel="noopener noreferrer">
            <h4>{title}</h4>
          </Link>
        </div>
        <div className={classes.rating}>
          <Rating
            name="read-only"
            value={rating?.rate}
            precision={0.1}
            readOnly
          />
          <h4 className={classes.rateNum}> {rating?.rate}</h4>
        </div>
        <div className={`${classes.titlePrice} ${classes.alignment}`}>
          {/* <div className={classes.cartAndPrice}> */}
          <h3 className={classes.price}>${price}</h3>
          {/* <img src={cart} alt="" /> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};
