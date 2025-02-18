import {useParams} from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"



const CriptoPag = ()=>{ 
    const url ="https://api.coincap.io/v2/assets/"
    const params = useParams();
    

    const [cripto,setCripto] = useState({
        name:"",
        price:0,
        symbol:""
    })
    
    useEffect(()=>{
        axios.get(`${url}${params.id}`)
        .then(respuesta=>{
            setCripto(
                {name:respuesta.data.data}
            )
        })
        .catch((e)=>{
            console.log(e)
        })
    },[params.id])

    return (
        <>
        <h1>Soy la CriptoMoneda {params.id}</h1>
        <div>
            <span>{cripto.name}</span>
            <span>{cripto.price}</span>
            <span>{cripto.symbol}</span>
            
        </div>
        </>
    )
}

export default CriptoPag;