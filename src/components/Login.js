import React from "react";
import { useForm } from "react-hook-form";
import "../stylex/login.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const formSubmit = async (e) => {
    const existingUsers = await axios
      .get("http://localhost:4000/users")
      .then((res) => res.data);
    const checkUser = existingUsers.find((user) => user.email === e.email);
    if (!checkUser) {
      alert("user not existed");
    } else {
      if (checkUser.password === e.password) {
        dispatch(userActions.setLogin("sharath"));
        alert("login success");
        navigate("/listofproducts");
      } else {
        alert("Incorrect password");
      }
    }
    reset();
  };
  return (
    <div className="loginPage">
      <h3 className="text-center">Login</h3>
      <form onSubmit={handleSubmit(formSubmit)}>
        <input
          type="email"
          placeholder="Enter email..."
          {...register("email", { required: true })}
        />
        <input
          type="password"
          placeholder="Enter password..."
          {...register("password", { required: true })}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
