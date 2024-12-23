import { useEffect ,useState } from "react"
import axios from "axios"


function App() {

  //const API_URL = import.meta.env.VITE_API_URL
  const url = "https://api.coinlore.net/api/tickers/"
  const [criptos,] = useState([])

  useEffect(()=>{
    axios.get(url)
    .then((data)=>{
      console.log(data)
      //setCriptos(data.data)
    })
    .catch(()=>{
      console.error("algo ah fallado")
    })
  },[])

  if(criptos.length ===0) return <span>Cargando...</span>

  return(
    <>
      <h1>Lista de criptos</h1>
      <ol>
        {
        criptos.map(({id, name,price_usd }) =>(
          <li key={id} > nombre:{name}, Precio$:{price_usd}</li>
        ))
      }
      </ol>
    </>
  )  
}
export default App
