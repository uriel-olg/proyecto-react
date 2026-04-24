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
import {InfoBox} from "./infoBox"

type HistoryPoint = {
    priceUsd: string;
    time: number;
};


export default function CryptoDetails() {
    const { id } = useParams();
    const {crypto: cryptos}= useContext(CryptoContext);

    const item = cryptos.find((c) => c.id === id);

    const [history, setHistory] = useState([]);

    // 📌 Obtener historial de precio
    useEffect(() => {
        async function getHistory() {
            const res = await fetch(
                `https://rest.coincap.io/v3/assets/${id}/history?interval=h1&apiKey=${import.meta.env.VITE_COINCAP_KEY}`
            );
            const data = await res.json();

            // Recharts usa arrays de objetos, así que damos forma
            const formatted = data.data.map((p:HistoryPoint) => ({
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
        <div className="min-h-screen bg-gradient-to-br from-[#0a0f2d] to-[#05122e] text-white p-6 animate-fadeIn  items-center">

    <Link
        to="/cryptos"
        className="text-gray-300 hover:text-white transition mb-4 inline-block"
    >
        ← Volver
    </Link>

    {/* GRID PRINCIPAL */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pt-25">

        {/* ──────────────────────────────
            COLUMNA 1 — Icono y título
        ─────────────────────────────── */}
        <div className="flex flex-col items-center gap-4 bg-gradient-to-br from-[#0a0f2d] to-[#11183d]  p-6 rounded-xl shadow">

            <img
                src={logo}
                alt={item.name}
                className="w-28 h-28 drop-shadow-xl animate-pop"
            />

            <h1 className="text-4xl font-bold">{item.name}</h1>
            <p className="text-gray-400 uppercase tracking-widest">
                {item.symbol}
            </p>
        </div>

        {/* ──────────────────────────────
            COLUMNA 2 — Precio
         ─────────────────────────────── */}
        <div className="flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0f2d] to-[#11183d]  p-6 rounded-xl shadow">

            <p className="text-4xl font-semibold">
                ${Number(item.priceUsd).toFixed(2)}
            </p>

            <span
                className={`mt-2 text-xl font-bold ${
                    item.changePercent24Hr > 0
                        ? "text-green-400"
                        : "text-red-400"
                }`}
            >
                {Number(item.changePercent24Hr).toFixed(2)}%
            </span>
        </div>

        {/* ──────────────────────────────
            COLUMNA 3 — Datos principales (mini grid)
        ─────────────────────────────── */}
        <div className="grid grid-cols-2 gap-4 bg-gradient-to-br from-[#0a0f2d] to-[#11183d]  p-6 rounded-xl shadow wrap-anywhere">

            <InfoBox title="Market Cap">
                ${Number(item.marketCapUsd).toFixed(1)}
            </InfoBox>

            <InfoBox title="Volumen 24h">
                ${Number(item.volumeUsd24Hr).toFixed(2)}
            </InfoBox>

            <InfoBox title="Supply">
                {Number(item.supply).toFixed(3)}
            </InfoBox>

            <InfoBox title="VWAP 24h">
                ${Number(item.vwap24Hr).toFixed(2)}
            </InfoBox>
        </div>
    </div>

    {/* ──────────────────────────────
        FILA COMPLETA — Gráfico
        (ocupa las 3 columnas)
    ─────────────────────────────── */}
    <div className="mt-10 bg-gradient-to-br from-[#0a0f2d] to-[#11183d]  p-6 rounded-xl shadow w-full">
        <h2 className="text-xl font-semibold mb-4">Histórico</h2>

        {history.length === 0 ? (
            <p className="text-gray-400">No hay datos disponibles</p>
        ) : (
            <div className="w-full h-72">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={history}>
                        <XAxis dataKey="time" stroke="#888" tickFormatter={(t) =>
                        new Date(t).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                        })
                    }/>
                        <Tooltip labelFormatter={(label) =>
                            new Date(label).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                            })
                        }/>
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