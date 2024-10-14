import { Box, Button, Modal } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function EditProductModal({ show, onClose, editProduct }) {
  const [productName, setProductName] = useState(editProduct.name);
  const [productDesc, setProductDesc] = useState(editProduct.description);
  const [productPrice, setProductPrice] = useState(editProduct.price);
  const [productQuantity, setProductQuantity] = useState(editProduct.quantity);

  
  



  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'white',
    border: '1px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  const handleSubmit =async(e)=>{
    const updatedProduct={id:editProduct.id, name:productName, description:productDesc, price:productPrice, quantity:productQuantity}
    await axios.put(`http://localhost:4000/products/${editProduct.id}`, updatedProduct).then((res)=>console.log(res.data));
    onClose();
  }

  return (
    <div>
      <Modal
        open={show}
        onClose={onClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 600 }}>
          <h2 id="child-modal-title">Edit Product</h2>
          <table className='' style={{textAlign:"left"}}>
            <tr><td> <label>Product name</label></td><td> <input
            type="text"
            // required="true"
            value={productName}
            onChange={(e)=>setProductName(e.target.value)}
          /></td></tr>
          <tr><td><label>product description</label></td><td><input
            type="text"
            value={productDesc}
            // required="true"
            onChange={(e)=>setProductDesc(e.target.value)}
          /></td></tr>
          <tr><td><label>product price</label></td><td> <input
            type="number"
            value={productPrice}
            // required="true"
            onChange={(e)=>setProductPrice(e.target.value)}
          /></td></tr>
          <tr><td><label>product quantity</label></td><td> <input
            type="number"
            value={productQuantity}
            // required="true"
            onChange={(e)=>setProductQuantity(e.target.value)}
          /></td></tr>
          </table> 
          <Button type='submit' onClick={handleSubmit}>Update</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default EditProductModal;
