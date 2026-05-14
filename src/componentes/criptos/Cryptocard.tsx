import { useNavigate } from "react-router-dom";

export type props = {
  id: string,
  rank: number,
  name: string,
  symbol: string,
  price: number,
  change: number,
  price24: number
};

export default function CryptoCard({ id, rank, name, symbol, price, change, price24 }: props) {

  const navigate = useNavigate();

  return (
    <div className="max-h-screen max-w-screen 
       bg-black/20 border border-white/10 
      rounded-lg p-5 shadow-lg 
      hover:border-white/20 hover:-translate-y-1 transition-all cursor-pointer hover:shadow-blue-300/20">

      {/* Superior */}
      <div className="flex items-center gap-4">

        <img
          className="size-16 rounded-md"
          src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
          alt={name}
        />

        <div>
          <h3 className="text-white text-xl font-semibold tracking-tight">{name}</h3>

          <p className="text-gray-400 text-sm">#{rank} · {symbol.toUpperCase()}</p>
        </div>

      </div>

      {/* Precio */}
      <p className="text-gray-300 text-lg font-medium mt-4">
        Precio: 
        <span className="text-green-400 ml-1 font-semibold">
          $ {Number(price).toFixed(2)}
        </span>
      </p>

      {/* Variación */}
      <p className={`mt-2 font-medium ${
        change > 0 ? "text-green-400" : "text-red-400"
      }`}>
        {change > 0 ? "▲" : "▼"} {Number(price24).toFixed(2)}%
      </p>

      {/* Botón minimal */}
      <button
        className="mt-5 text-sm text-blue-400 text-sm mt-2 inline-block hover:text-blue-100"
        onClick={() => navigate(`/crypto/${id}`)}
      >
        Más info
      </button>
    </div>
  );
}