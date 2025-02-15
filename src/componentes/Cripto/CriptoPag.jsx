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
        axios.get("api.coincap.io/v2/assets/bitcoin")
        .then(respuesta=>{
            const criptoData = respuesta.data.data.find(c => c.id === params.id)
            console.log(respuesta)
            if(criptoData){
            setCripto({
                name:criptoData.data.name,
                price:criptoData.data.priceUsd,
                symbol:criptoData.data.symbol})
            }
            
        })
        .catch(()=>{
            console.log("Error, algo ha ocurrido")
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