import { useState,useEffect } from "react"
import axios from "axios"
import CriptoMoneda from "./Cripto"
import "./App.css"


function App() {

  //const API_URL = import.meta.env.VITE_API_URL

  const url = "https://api.coinlore.net/api/tickers/"
    const [criptos,setCriptos] = useState([])
    
    useEffect(()=>{
        axios.get(url)
        .then((data)=>{
        console.log(data)
        setCriptos(data.data.data)
        console.log(data.data)
        })
        .catch(()=>{
        console.error("algo ah fallado")
        })
    },[])
    
    if(criptos.length ===0) return <span>Cargando...</span>
    
  return(
    <>
    <div className="main-conteiner">
      <h1>Lista de cripto monedas</h1>
      <div className="cripto-conteiner">
          {
          criptos.map(({nameid,name,price_usd,symbol,percent_change_24h}) =>(
          <CriptoMoneda  key={nameid} nombre={name} precioUsd={price_usd} codigo={symbol} variacion={percent_change_24h}/>
        ))}
      </div>
    </div>
      
    </>
)
}    

export default App; 