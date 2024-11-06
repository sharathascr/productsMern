import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../contextAPI/AppContextProvider";

function Login() {
  const navigate = useNavigate();
  const { isLogin, setLogin } = useContext(AppContext);
  console.log(isLogin, setLogin);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const formSubmit = async (user) => {
    try {
      const result = await axios.post(
        "http://localhost:5000/api/users/login",
        user
      );
      if (result.status == 200) {
        sessionStorage.setItem("loggedInUser", result.data.user);
        sessionStorage.setItem("isLoggedIn", true);
        setLogin(sessionStorage.getItem("isLoggedIn"));
        navigate("/");
        toast.success("Login successful", {
          duration: 2000,
          position: "top-right",
          style: {
            background: "#4caf50",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "8px",
            margin: "70px 50px 0 0 ",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
          },
        });
      }
    } catch (error) {
      console.error(error.response);
      // if (error.message.includes(404)) {
      //   toast.error("user not exists", {
      //     duration: 2000,
      //     position: "top-right",
      //     style: {
      //       background: "#4caf50",
      //       color: "#fff",
      //       fontWeight: "bold",
      //       borderRadius: "8px",
      //       margin: "70px 50px 0 0 ",
      //       boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
      //     },
      //   });
      // }
    }
    reset();
  };
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit(formSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Email"
                fullWidth
                variant="outlined"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                fullWidth
                variant="outlined"
                name="password"
                type="password"
                {...register("password", {
                  required: "Passwprd is required",
                  minLength: {
                    value: 6,
                    message: "Password must be atleast 6 characters",
                  },
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="info" fullWidth>
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Toaster />
    </Container>
  );
}

export default Login;
