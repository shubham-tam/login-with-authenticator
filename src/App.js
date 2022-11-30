import { useState } from "react";
import { Home } from "./components/Pages/Home";
import { Login } from "./components/Pages/Login";
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
