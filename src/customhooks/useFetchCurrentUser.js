import axios from "axios";
import { USERS_URL } from "../utils/constants"
import { useEffect, useState } from "react";

export const useFetchCurrentUser=()=>{
    const [response, setResponse]=useState([]);
    useEffect(()=>{
        async function fetchData(){
        await axios.get(USERS_URL).then((res)=>setResponse(res.data));
        }
        fetchData();
    },[]);
    return response;
}