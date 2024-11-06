import {
  Card,
  Paper,
  Table,
  TableBody,
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
    <TableContainer>
      <Table
        sx={{ minWidth: "650", width: "50%", margin: "auto" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>description</TableCell>
            <TableCell>price</TableCell>
            <TableCell>quantity</TableCell>
            <TableCell>totalPrice</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>{product.totalPrice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ListOfProducts;
