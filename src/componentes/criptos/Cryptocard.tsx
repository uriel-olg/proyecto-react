type props ={
  name:string,
  symbol:string,
  image?:string,
  price:number,
  change:boolean
}


export default function CryptoCard({ name, symbol, image, price, change }:props) {
  return (
    <div className="bg-gradient-to-br from-[#0a0f2d] to-[#11183d] 
                    border border-[#1e2349] rounded-xl p-6 shadow-xl 
                    hover:shadow-blue-500/20 hover:-translate-y-1 transition-all cursor-pointer">

      {/* Superior */}
      <div className="flex items-center gap-4 mb-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full" />

        <div>
          <h3 className="text-white font-bold text-xl">{name}</h3>
          <p className="text-gray-400 text-sm">{symbol.toUpperCase()}</p>
        </div>
      </div>

      {/* Precio */}
      <p className="text-white text-2xl font-semibold">${price}</p>

      {/* Variación */}
      <p className={`mt-2 font-medium ${
        change >= 0 ? "text-green-400" : "text-red-400"
      }`}>
        {change >= 0 ? "▲" : "▼"} {change}%
      </p>
    </div>
  );
}
