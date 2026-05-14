import { useParams, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CryptoContext } from "../context/contextCryptos";
import {
    LineChart,
    Line,
    XAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { InfoBox } from "./infoBox";

type HistoryPoint = {
    priceUsd: string;
    time: number;
};

export default function CryptoDetails() {
    const { id } = useParams();
    const { crypto: cryptos } = useContext(CryptoContext);

    const item = cryptos.find((c) => c.id === id);
    const [history, setHistory] = useState([]);

    // 📌 Obtener historial de precio
    useEffect(() => {
        async function getHistory() {
            const res = await fetch(
                `https://rest.coincap.io/v3/assets/${id}/history?interval=h1&apiKey=${import.meta.env.VITE_COINCAP_KEY}`
            );
            const data = await res.json();

            const formatted = data.data.map((p: HistoryPoint) => ({
                time: Number(p.time),
                price: Number(p.priceUsd),
            }));

            setHistory(formatted);
        }

        getHistory();
    }, [id]);

    if (!item)
        return (
            <div className="h-screen w-full flex items-center justify-center text-white text-xl">
                Cargando...
            </div>
        );

    const logo = `https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`;

    return (
        <div className="min-h-screen  text-white p-5 m-auto">

            <Link
                to="/cryptos"
                className="text-gray-400 hover:text-gray-200 transition mb-6 inline-block text-sm"
            >
                ← Volver
            </Link>

            {/* GRID PRINCIPAL */}
            <div className="grid w-full w-full grid-cols-1 lg:grid-cols-3 gap-8">

                {/* ICONO Y NOMBRE */}
                <div className="flex flex-col items-center gap-2 
                                bg-black/20 border border-white/10 rounded-2xl
                                backdrop-blur-md p-5 shadow-lg shadow-black/20">

                    <img
                        src={logo}
                        alt={item.name}
                        className="w-24 h-24 drop-shadow-xl"
                    />

                    <h1 className="text-3xl font-semibold tracking-tight">
                        {item.name}
                    </h1>

                    <p className="text-gray-400 text-xs uppercase tracking-[0.2em]">
                        {item.symbol}
                    </p>
                </div>

                {/* PRECIO */}
                <div className="flex flex-col items-center justify-center gap-2 
                    bg-black/20 border border-white/10 rounded-2xl 
                        backdrop-blur-md p-8 shadow-lg shadow-black/20">

                    <p className="text-4xl font-bold tracking-tight">
                        <span className="text-green-400">$ {Number(item.priceUsd).toFixed(2)}</span>
                    </p>

                    <span
                        className={`text-lg font-semibold ${
                            item.changePercent24Hr > 0
                                ? "text-green-400"
                                : "text-red-400"
                        }`}
                    >
                        {Number(item.changePercent24Hr).toFixed(2)}%
                    </span>
                </div>

                {/* INFO BOXES */}
                <div className="grid grid-cols-2 gap-4">

                    <InfoBox title="Market Cap">
                        <span className="text-green-400 text-sm md:text-xl">{Number(item.marketCapUsd).toFixed(1)}</span>
                    </InfoBox>

                    <InfoBox title="Volumen 24h">
                        <span className="text-green-400 text-sm md:text-xl">{Number(item.volumeUsd24Hr).toFixed(2)}</span>
                    </InfoBox>

                    <InfoBox title="Supply">
                        <span className="text-green-400 text-sm md:text-xl">{Number(item.supply).toFixed(3)}</span>
                    </InfoBox>

                    <InfoBox title="VWAP 24h">
                        <span className="text-green-400 text-sm md:text-xl">{Number(item.vwap24Hr).toFixed(2)}</span>
                    </InfoBox>  
                </div>
            </div>

            {/* GRÁFICO */}
            <div className="mt-10 bg-black/20 border border-white/10 
                            backdrop-blur-md rounded-2xl p-8 
                            shadow-lg shadow-black/20">

                <h2 className="text-lg font-semibold mb-4 tracking-tight">
                    Histórico
                </h2>

                {history.length === 0 ? (
                    <p className="text-gray-500">No hay datos disponibles</p>
                ) : (
                    <div className="w-full h-72">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={history}>
                                <XAxis
                                    dataKey="time"
                                    stroke="#666"
                                    tickFormatter={(t) =>
                                        new Date(t).toLocaleTimeString([], {
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        })
                                    }
                                />
                                <Tooltip
                                    contentStyle={{
                                        background: "rgba(255,255,255,0.05)",
                                        border: "1px solid rgba(255,255,255,0.15)",
                                        backdropFilter: "blur(10px)",
                                        color: "#fff",
                                    }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="price"
                                    stroke="#4ade80"
                                    strokeWidth={2}
                                    dot={false}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                )}
            </div>
        </div>
    );
}