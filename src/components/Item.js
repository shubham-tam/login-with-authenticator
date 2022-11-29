import dropdown from "..//assets/icon/dropdown.png";
import minus from "..//assets/icon/minus.png";
import classes from "..//assets/style/item.module.css";

export const Item = ({ item, id, isActive, setIsActive }) => {
  const { category, description, price, title, image } = item;

  const toggler = () => {
    if (id === isActive) {
      setIsActive();
    } else {
      setIsActive(id);
    }
  };

  return (
    <>
      <div className={classes.item}>
        <div className={classes.category}>
          <h3> {category.charAt(0).toUpperCase() + category.slice(1)} </h3>
        </div>
        <div className={classes.imgBg}>
          <img src={image} alt="" className={classes.image} />
        </div>
        <div className={`${classes.titlePrice} ${classes.alignment}`}>
          <h4>{title}</h4>
          <h4 className={classes.price}>${price}</h4>
        </div>
        <div onClick={() => toggler()} className={classes.buttonToggler}>
          Description <img src={id === isActive ? minus : dropdown} alt="" />
        </div>
        {id === isActive && (
          <div className={`${classes.desc} ${classes.alignment}`}>
            <div>{description}</div>
          </div>
        )}
      </div>
    </>
  );
};
