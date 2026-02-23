import { useNavigate} from "react-router-dom";

export type props ={
  id:string,
  rank:number,
  name:string,
  symbol:string,
  image:string,
  price:number,
  change:boolean,
  price24:number
}



export default function CryptoCard({ id,rank,name, symbol, price, change,price24 }:props) {

  const navigate = useNavigate()

  return (
    <div className="max-h-screen max-w-screen bg-gradient-to-br from-[#0a0f2d] to-[#11183d] 
      border border-[#1e2349] rounded-xl p-5 shadow-xl 
      hover:shadow-blue-300/20 hover:-translate-y-1 transition-all cursor-pointer">

      {/* Superior */}
      <div className="flex-col flex-wrap">

      <img className="size-20 p-1"src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`} alt={name}/>

        <div>
          <h2>Rank: {rank}</h2>
          <h3 className="text-white font text-xl">Nombre : {name}</h3>
          <p className="text-gray-400 text-sm">Symbol : {symbol.toUpperCase()}</p>
        </div>
      
      </div>

      {/* Precio */}
      <p className="text-white text-2xl font-semibold">Precio : $ {Number(price).toFixed(2)}</p>

      {/* Variación */}
      <p className={`mt-2 font-medium ${
        change >= false ? "text-green-400" : "text-red-400"
      }`}>
        {change >= true ? "▲" : "▼"} {change} {Number(price24).toFixed(2)}%
      </p>

      <button className="text-gray-300 hover:text-white cursor-pointer" onClick={() => navigate(`/crypto/${id}`)}>
        Más info
      </button>
    </div>
  );
}
