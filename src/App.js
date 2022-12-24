import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import { Home } from "./Pages/Home";
import { AdminDashboard } from "./Pages/AdminDashboard";
import { ProductPage } from "./Pages/ProductPage";

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
    </>
  );
}

export default App;
