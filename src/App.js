import { useState } from "react";
import { Home } from "./components/Pages/Home";
import { Login } from "./components/Pages/Login";
import { AddNewProduct } from "./components/Pages/AddNewProduct";
import { ProductPage } from "./components/Pages/ProductPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./assets/style/style.css";
function App() {
  // const [token, setToken] = useState();

  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":id" element={<ProductPage />} />
          <Route path="/addnewproduct" element={<AddNewProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
