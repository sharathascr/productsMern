import { Box, Button, Container } from "@mui/material";
import React from "react";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const test = () => {
    toast.success("Hello world", {
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
  };
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, display: "flex", justifyContent: "space-evenly" }}>
        <Button
          variant="contained"
          color="success"
          onClick={() => navigate("listOfProducts")}
        >
          List of Products
        </Button>
        <Button
          variant="contained"
          color="primary"
          // onClick={() => navigate("/addProducts")}
          onClick={test}
        >
          Add Products
        </Button>
      </Box>
      <Toaster />
    </Container>
  );
}

export default Home;
