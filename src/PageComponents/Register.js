import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

function Register() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const formSubmit = async (user) => {
    try {
      const result = await axios.post(
        "http://localhost:5000/api/users/register",
        user
      );

      if (result.status == 201) {
        toast.success("user created successfully", {
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
      if (error.message.includes(409)) {
        toast.error("user already existed", {
          duration: 2000,
          position: "top-right",
          style: {
            background: "orange",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "8px",
            margin: "70px 50px 0 0 ",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
          },
        });
      }
    }
    reset();
  };
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Register
        </Typography>
        <form onSubmit={handleSubmit(formSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                {...register("name", { required: "Name is required" })}
                error={!!errors.name}
                helperText={errors.name ? errors.name.message : ""}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                name="email"
                type="email"
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
                variant="outlined"
                fullWidth
                name="password"
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be atleast 6 characters",
                  },
                })}
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ""}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="warning"
                fullWidth
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Toaster />
    </Container>
  );
}

export default Register;
