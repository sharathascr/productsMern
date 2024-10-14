import { createSlice } from "@reduxjs/toolkit";

export const userSlice=createSlice({
    name:'user',
    initialState:{isLogin:false,loggedInUser:null},
    reducers:{
        setLogin(state,action){
            state.isLogin=true;
            state.loggedInUser=action.payload;
        },
        setLogout(state){
            state.isLogin=false;
            state.loggedInUser=null;
        }
       
    }
})

export const userActions=userSlice.actions;

