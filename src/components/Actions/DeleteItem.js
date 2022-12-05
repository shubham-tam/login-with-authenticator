import trash from "..//..//assets/icon/trash.png";
import { toast } from "react-toastify";
import classes from "..//..//assets/style/delete.module.css";

export const DeleteItem = (id) => {
  const handleDelete = async () => {
    await fetch(`https://fakestoreapi.com/products/${id.id}`, {
      method: "DELETE",
    });
    toast.success(`${id.title} has been successfully deleted.`);
  };

  return (
    <>
      <div className={classes.body}>
        <button onClick={() => handleDelete()}>
          <img src={trash} alt="Delete icon" />
        </button>
      </div>
    </>
  );
};
