import { useState,useEffect } from "react"
import axios from "axios"
import CriptoMoneda from "./Cripto/Cripto"
import "./Cuadricula.css"



function Cuadricula() {
 // https://rest.coincap.io/v3/assets?apiKey=ce6fb0bc1b8981c011a1ec036dddc1907ae5474c6c6d44850f87dd46b1e170dd

  //const API_URL = import.meta.env.VITE_API_URL
    //const key = "ce6fb0bc1b8981c011a1ec036dddc1907ae5474c6c6d44850f87dd46b1e170dd"
    const url = "https://rest.coincap.io/v3/assets?apiKey=ce6fb0bc1b8981c011a1ec036dddc1907ae5474c6c6d44850f87dd46b1e170dd"
    const [criptos,setCriptos] = useState([])
    
    useEffect(()=>{
        axios.get(url)
        .then((data)=>{
        console.log(data)
        setCriptos(data.data.data)
        })
        .catch((e)=>{
        console.error("algo ah fallado",e)
        })
    },[])
    
    while(criptos.length ===0) return <span className="cargando">Cargando...</span>
    
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