import { useState,useEffect } from "react";
import axios from "axios";

const usePetition = (endpoint)=>{
    const url ="https://api.coincap.io/v2/assets/"


    const [data,setData] = useState()

    useEffect(()=>{
        axios.get(`${url}${endpoint}`)
        .then(respuesta=>{
            setData(respuesta.data.data)
        })
        .catch((e)=>{
            console.log(e)
        })
    },[])

    return data 
}
export default usePetition;