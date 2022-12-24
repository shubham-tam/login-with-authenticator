import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

import classes from "..//assets/style/item.module.css";

export const Item = ({ item, id }) => {
  const { price, title, image, rating } = item;
  console.log(item);

  return (
    <>
      <div className={classes.item}>
        <div className={classes.imgBg}>
          <img src={image} alt="" className={classes.image} />
        </div>
        <div className={`${classes.titlePrice} ${classes.alignment}`}>
          <Link
            to={`${id}`}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.headers}
          >
            <h4>{title}</h4>
          </Link>
        </div>
        <div className={classes.rating}>
          <h4 className={classes.rateNum}> {rating?.rate}</h4>
          <Rating
            name="read-only"
            value={rating?.rate}
            precision={0.1}
            readOnly
          />
        </div>
        <div className={`${classes.titlePrice} ${classes.alignment}`}>
          <h3 className={classes.price}>${price}</h3>
        </div>
      </div>
    </>
  );
};
