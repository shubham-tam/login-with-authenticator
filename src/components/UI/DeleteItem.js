import trash from "..//..//assets/icon/trash.png";
import { toast } from "react-toastify";

export const DeleteItem = (id) => {
  const handleDelete = async () => {
    await fetch(`https://fakestoreapi.com/products/${id.id}`, {
      method: "DELETE",
    });
    toast.success(`${id.title} has been successfully deleted.`);
  };

  return (
    <>
      <button onClick={() => handleDelete()}>
        <img src={trash} alt="Delete icon" />
      </button>
    </>
  );
};
