import { Home } from "./components/Pages/Home";
import { AdminDashboard } from "./components/Pages/AdminDashboard";
import { ProductPage } from "./components/Pages/ProductPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { AddNewProduct } from "./components/Dashboard/AddNewProduct";
// import { UpdateProduct } from "./components/Dashboard/UpdateProduct";
import "./App.css";
import "./assets/style/style.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":id" element={<ProductPage />} />
          <Route path="/Admin" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>

      {/* <AddNewProduct /> */}

      {/* <UpdateProduct /> */}
    </>
  );
}

export default App;
