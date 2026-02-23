import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Load } from "../cargando/load"
import { Nav } from "../nav/nav"

const URL = "https://rest.coincap.io/v3/exchanges?key=ce6fb0bc1b8981c011a1ec036dddc1907ae5474c6c6d44850f87dd46b1e170dd"


type Exchange = {
    exchangeId: string;
    name: string;
    rank: string;
    percentTotalVolume: string;
    volumeUsd: string;
    tradingPairs: string;
    socket: string | null;
    exchangeUrl: string;
};

export const ExchangeGrid = () => {

    const [exchanges, setExchanges] = useState<Exchange[]>([])

    const getExchanges = async () => {
        try {
        const res = await fetch(URL)
        const json = await res.json()
        setExchanges(json.data)
        console.log(json)
        return (json.data)
        } catch (e) {
        console.log("error:", e)
        }
    }

    useEffect(() => {
        getExchanges() 
    }, [])


    if (!exchanges || exchanges.length === 0) {
            return <Load />
        }

    return (
        
        <>
        <Nav></Nav>

        <Link
        to="/cryptos"
        className="text-gray-300 hover:text-white transition  inline-block p-6"> 
        ← Volver </Link>
        
        <div className="min-h-screen pb-10 pl-10 pr-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-white ">

        {exchanges.map((ex) => (
            <div
            key={ex.exchangeId}
            className="bg-gradient-to-br from-[#0a0f2d] to-[#11183d]
                        p-5 rounded-xl shadow-lg hover:scale-[1.03]
                        transition-all duration-200 cursor-pointer
                        hover:shadow-blue-300/20"
            >
            <h2 className="text-xl font-bold mb-2">{ex.name}</h2>

            <p className="text-gray-400 text-sm mb-1">
                Rank: <span className="text-white">{ex.rank}</span>
            </p>

            <p className="text-gray-400 text-sm mb-1">
                Pares: <span className="text-white">{ex.tradingPairs}</span>
            </p>

            <p className="text-gray-400 text-sm mb-1">
                Volumen:{" "}
                <span className="text-green-400 font-semibold">
                ${Number(ex.volumeUsd).toLocaleString()}
                </span>
            </p>

            <a
                href={ex.exchangeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 text-sm mt-2 inline-block hover:text-blue-100"
            >
                Visitar sitio
            </a>
            </div>
        ))}
    
        </div>
        </>

        
    )
}