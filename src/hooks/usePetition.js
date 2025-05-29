import { useState,useEffect } from "react";
import axios from "axios";

const usePetition = (endpoint)=>{
    const url ="https://rest.coincap.io/v3/assets"
    const key ="ce6fb0bc1b8981c011a1ec036dddc1907ae5474c6c6d44850f87dd46b1e170dd"
    const [data,setData] = useState()
    const [cargando,setCargando] = useState(false)
    const [error,setError] = useState()

    useEffect(()=>{
        setCargando(true)

        axios.get(`${url}${endpoint}`,{
            headers: {
            "Authorization": `Bearer ${key}`
        }
        })
        .then(respuesta=>{
            setData(respuesta.data.data)

            setCargando(false)
        })
        .catch((e)=>{
            setCargando(false)
            setError(e)
            console.log(e)
        })
    },[])

    return [data,cargando,error] 
}
export default usePetition;