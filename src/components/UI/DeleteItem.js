import { useEffect } from "react";
import trash from "..//..//assets/icon/trash.png";

export const DeleteItem = (id) => {
  console.log(id.id);

  const handleDelete = async () => {
    let result = await fetch(`https://fakestoreapi.com/products/${id.id}`, {
      method: "DELETE",
    });
    result = await result.json();
    console.log(result);
    //   .then((res) => res.json())
    //   .then((json) => console.log(json));
  };
  //   useEffect(() => {
  //     // handleDelete();
  //   }, [id?.id]);

  //   const handleDelete = () => {
  //     alert(id.id);
  //   };

  return (
    <>
      <button onClick={() => handleDelete()}>
        <img src={trash} alt="Delete icon" />
      </button>
    </>
  );
};
