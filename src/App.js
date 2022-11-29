import { useState } from "react";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./assets/style/style.css";

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <>
      <h1> Product List </h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
