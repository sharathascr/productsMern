import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./PageComponents/Home";
import Login from "./PageComponents/Login";
import Register from "./PageComponents/Register";
import Navbar from "./components/Navbar";
import ListOfProducts from "./PageComponents/ListOfProducts";
import NotFound from "./PageComponents/NotFound";
import AddProduct from "./PageComponents/AddProduct";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/listOfProducts" element={<ListOfProducts />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
