import React, { useEffect, useState } from "react";
import axios from 'axios';
import '../stylex/ListOfProducts.css';
import { useNavigate } from "react-router-dom";
import EditProductModal from "./EditProductModal";

function ListOfProducts() {
  const [listofproducts, setListofproducts] = useState([]);
  const [editProduct, setEditProduct]=useState([])
  const [isDeleted, setIsDeleted]=useState(false);
  const [open, setOpen]=useState(false);
  const fetchData=async()=>{
   await axios.get('http://localhost:4000/products').then((res)=>setListofproducts(res.data));
  }
  useEffect(() => {
    fetchData()
  }, [isDeleted,open]);
  
  const handleEdit=(product)=>{
    setEditProduct(product)
    setOpen(!open)
  }
  
  const handleDelete=async(id)=>{
    try{
      await axios.delete(`http://localhost:4000/products/${id}`).then((res)=>{setIsDeleted(!isDeleted)});
    }
    catch(err){
      alert('Something went wrong')
    }
  }

  const handleClose=()=>{
    setOpen(!open)
  }
  return (
    <div className="listOfProductsPage">
      <h3 className="text-center">List of products</h3>

      {listofproducts.length !== 0 ? (
        <table className="table table-striped">
          <thead>
            <th>Name</th>
            <th>description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total amount</th>
          </thead>
          <tbody>
            {listofproducts.map((product,index)=>
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.price * product.quantity}</td>
              <td><button onClick={()=>handleEdit(product)}>edit</button>{" "}<button onClick={()=>handleDelete(product.id)}>delete</button></td>
            </tr>
            )}
          </tbody>
        </table>
      ) : (
        <h4 className="text-center">No products available</h4>
      )}
      <EditProductModal show={open} onClose={handleClose} editProduct={editProduct}/>
    </div>
  );
}

export default ListOfProducts;
