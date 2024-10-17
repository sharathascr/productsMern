import { Box, Button, Container } from "@mui/material";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const test = () => {
    const res = axios
      .get("http://localhost:5000/sample")
      .then((res) => console.log(res));
    console.log(res);
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
    </Container>
  );
}

export default Home;
