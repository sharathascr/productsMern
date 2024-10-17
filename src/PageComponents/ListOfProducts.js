import {
  Card,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

function ListOfProducts() {
  const products = [
    {
      name: "iPhone",
      price: "100000",
      description: "Awesome",
      quantity: 1,
      totalPrice: 100000,
    },
    {
      name: "iPhone",
      price: "100000",
      description: "Awesome",
      quantity: 1,
      totalPrice: 100000,
    },
    {
      name: "iPhone",
      price: "100000",
      description: "Awesome",
      quantity: 1,
      totalPrice: 100000,
    },
    {
      name: "iPhone",
      price: "100000",
      description: "Awesome",
      quantity: 1,
      totalPrice: 100000,
    },
    {
      name: "iPhone",
      price: "100000",
      description: "Awesome",
      quantity: 1,
      totalPrice: 100000,
    },
  ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: "650" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>description</TableCell>
            <TableCell>price</TableCell>
            <TableCell>quantity</TableCell>
            <TableCell>totalPrice</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
}

export default ListOfProducts;
