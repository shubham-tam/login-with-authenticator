import { NavBar } from "../UI/NavBar";
import { AddNewProduct } from "../Dashboard/AddNewProduct";
import { UpdateProduct } from "../Dashboard/UpdateProduct";
import { useState } from "react";

export const AdminDashboard = () => {
  const [addNewProductActive, isAddNewProductActive] = useState(false);

  const addNewProductToggler = () => {
    addNewProductActive
      ? isAddNewProductActive(false)
      : isAddNewProductActive(true);
  };
  return (
    <>
      <NavBar />
      {/* Add new Product shit */}
      {/* <div
        onClick={addNewProductToggler}
        style={{ background: "orangered", cursor: "pointer" }}
      >
        {" "}
        Add new product
        {addNewProductActive && <AddNewProduct />}
      </div> */}

      {/* <AddNewProduct /> */}
      <br />
      <br />
      <br />
      <br />

      {/* <UpdateProduct /> */}
    </>
  );
};
