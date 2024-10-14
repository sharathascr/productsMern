import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import '../stylex/AddProdcuct.css';

function AddProduct() {
   
    const {handleSubmit, register, formState:{errors},reset}=useForm()
    const formSubmit=async(e)=>{
        const currentProduct={...e, id:uuidv4()}
        
        // const exitingProducts=await axios.get('http://localhost:4000/products').then((res)=>res.data);
        // const response=exitingProducts.find((product)=>product.name===currentProduct.name);
        // let postResponse=null;
        // if(!response){
          
        //  postResponse=await axios.post('http://localhost:4000/products', currentProduct).then((res)=>(res));
        //  postResponse.status===201 && alert('Product saved')
        // }
        // else{
        //  alert('Product already available')
        // }
        // reset()
    }
  return (
    <div className='AddProductPage'>
        <h3 className='heading'>Add product</h3>
        <form onSubmit={handleSubmit(formSubmit)}>
            <input type="text" placeholder='product name...' {...register('name', {required:true})}/>
            <br/>
            {errors.name?.type==="required" && <p>please enter product name</p>}
            <input type="text" placeholder='product description...' {...register('description', {required:true})}/>
            <br/>
            {errors.description?.type==="required" && <p>please enter product description</p>}
            <input type="number" placeholder='product price...' {...register('price', {required:true})}/>
            <br/>
            {errors.price?.type==="required" && <p>please enter product price</p>}
            <input type="number" placeholder='product quantity...' {...register('quantity', {required:true})}/>
            <br/>
            {errors.quantity?.type==="required" && <p>please enter product quantity</p>}
            <button type='submit'>Add Product</button>
        </form>
        <ToastContainer/>
    </div>
  )
}

export default AddProduct