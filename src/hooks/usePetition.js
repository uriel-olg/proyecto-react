import { useState,useEffect } from "react";
import axios from "axios";

const usePetition = (endpoint)=>{
    const url ="https://api.coincap.io/v2/assets/"

    const [data,setData] = useState()
    const [cargando,setCargando] = useState(false)
    const [error,setError] = useState()

    useEffect(()=>{
        setCargando(true)

        axios.get(`${url}${endpoint}`)
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