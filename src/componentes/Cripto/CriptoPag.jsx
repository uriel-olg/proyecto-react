import {useParams} from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import "./CriptoPage.css"


const CriptoPag = ()=>{ 
    const url ="https://api.coincap.io/v2/assets/"
    const params = useParams();
    

    const [cripto,setCripto] = useState({
        name:"",
        price:0,
        symbol:""
    })

    const [history,setHistorys] = useState([])
    
    useEffect(()=>{
        axios.get(`${url}${params.id}`)
        .then(respuesta=>{
            setCripto(
                {name:respuesta.data.data.name,
                price:respuesta.data.data.priceUsd,
                symbol:respuesta.data.data.symbol}
            )
        })
        .catch((e)=>{
            console.log(e)
        })
    },[params.id])
    
    useEffect(()=>{
        axios.get(`${url}${params.id}/history?interval=d1`)
        .then(respuesta=>{
            setHistorys(respuesta.data.data)
        })
        .catch((e)=>{
            console.log(e)
        })
    },[params.id])


    return (
        <>
        <h1 className="titulo">Soy la CriptoMoneda {params.id}</h1>
        <div>
            <ul>
                <li>{cripto.name}</li>
                <li>{cripto.price}</li>
                <li>{cripto.symbol}</li>
            </ul>
            <span className="historial">history</span>
            <br />
            
            <br />
            <table>
                <thead>
                   <tr>
                    <th>Fecha</th>
                    <th>Precio</th>
                </tr> 
                </thead>
                <tbody>
                    {
                        history.map(({date,priceUsd,time})=>{
                            return(
                                <tr key={time}>
                                <td>{date}</td>
                                <td>{parseFloat(priceUsd).toFixed(2)}</td>
                            </tr>
                            )
                            
                        })
                    }
                    
                </tbody>
            </table>
        </div>
        </>
    )
}

export default CriptoPag;