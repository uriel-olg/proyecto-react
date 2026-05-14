import { useEffect, useState } from "react";
import { Load } from "../cargando/load";
import { Nav } from "../nav/nav";

const URL = `https://rest.coincap.io/v3/exchanges?apiKey=${
    import.meta.env.VITE_COINCAP_KEY
}`;

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
    const [exchanges, setExchanges] = useState<Exchange[]>([]);

    useEffect(() => {
        const getExchanges = async () => {
        try {
            const res = await fetch(URL);
            const json = await res.json();
            setExchanges(json.data);
        } catch (e) {
            console.log("error:", e);
        }
        };
        getExchanges();
    }, []);

    if (!exchanges || exchanges.length === 0) {
        return   <div className="w-full h-screen flex justify-center items-center">
                    <Load></Load>
                </div>
    }

    return (
    <>
        <Nav />

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 p-10 gap-10 mt-10">

            {exchanges.map((ex) => (
            <div
                key={ex.exchangeId}
                className="
                max-h-screen max-w-screen 
        bg-black/20 border border-white/10 
        rounded-2xl p-5 shadow-lg 
        hover:border-white/20 hover:-translate-y-1 transition-all cursor-pointer hover:shadow-blue-300/20 cursor-pointer
                "
            >
                <h2 className="text-lg font-semibold mb-2">
                {ex.name}
                </h2>

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
    );
};