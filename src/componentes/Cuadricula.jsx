import { useState,useEffect } from "react"
import axios from "axios"
import CriptoMoneda from "./Cripto/Cripto"
import "./Cuadricula.css"



function Cuadricula() {

  //const API_URL = import.meta.env.VITE_API_URL

  const url = "https://api.coincap.io/v2/assets/"
    const [criptos,setCriptos] = useState([])
    
    useEffect(()=>{
        axios.get(url)
        .then((data)=>{
        console.log(data)
        setCriptos(data.data.data)
        })
        .catch(()=>{
        console.error("algo ah fallado")
        })
    },[])
    
    if(criptos.length ===0) return <span className="cargando">Cargando...</span>
    
  return(
    <>
    <div className="main-conteiner">
      <h1 className="titulo">Lista de CriptoMonedas</h1>
      <div className="cripto-conteiner">
          {
          criptos.map(({id,name,priceUsd,symbol,changePercent24Hr}) =>(
          <CriptoMoneda 
          key={id}
          nombre={name}
          precioUsd={priceUsd} 
          codigo={symbol} 
          variacion={changePercent24Hr}
          id={id}
          />
        ))}
      </div>
    </div>
      
    </>
)
}    

export default Cuadricula; 