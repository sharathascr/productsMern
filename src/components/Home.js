import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFetchCurrentUser } from "../customhooks/useFetchCurrentUser";
import { useSelector } from "react-redux";
import "../stylex/Home.css";

function Home() {
  const currentUser = useSelector((state) => state.loggedInUser);
  const isLogin = useSelector((state) => state.isLogin);
  const navigate = useNavigate();
  const allUsers = useFetchCurrentUser();
  console.log(allUsers);
  return (
    <div className="container-fluid">
      {isLogin && (
        <h3 className="d-flex justify-content-end">
          Welcome, <span className="text-success">{currentUser}</span>
        </h3>
      )}
      <div className="homeBtns">
        <button onClick={() => navigate("/listofproducts")}>
          List of Products
        </button>
        <button onClick={() => navigate("addproduct")}>Add Product</button>
      </div>
    </div>
  );
}

export default Home;
