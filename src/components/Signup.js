import React from 'react'
import { useForm } from 'react-hook-form';
import '../stylex/signup.css';
import axios from 'axios';


function Signup() {
    const {register, handleSubmit, formState:{errors}, reset}=useForm();
    const formSubmit=async(e)=>{
      const response=await axios.post('http://localhost:4000/users', e).then((res)=>res.status); 
      if(response===201){
        alert('User saved')
      }
      else{
        alert('Something went wrong')
      }
      reset()
    }
  return (
    <div className='signupPage'>
        <h3 className='text-center'>Sign up</h3>
        <form onSubmit={handleSubmit(formSubmit)}>
        <input type="text" placeholder='Enter username...'{...register('username', {required:true})}/>
        <input type="email" placeholder='Enter email...' {...register('email', {required:true})}/>
        <input type="password" placeholder='Enter password...'{...register('password', {required:true})}/>
        <br/>
        <button type='submit'>Signup</button>
        </form>
    </div>
  )
}

export default Signup