import { useEffect, useState } from "react"
import { Nav } from "../nav/nav"
import { Link } from "react-router-dom"
export const Home = () => {


    const [display, setDisplay] = useState(() => window.innerWidth > 1024)

    useEffect(() => {
        const handleResize = () => {
        setDisplay(window.innerWidth > 1024)
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])
    

    return (
        <div className="h-screen bg-gradient-to-br from-[#0a0f2d] to-[#05122e] text-white">

        <Nav />

        <section className=" grid md:grid-cols-2 gap-10 mt-10 md:px-8 p-5 justify-center items-center">

            <div className="space-y-5">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Explora el Mundo de las <br />
                Criptomonedas en Tiempo Real
            </h1>

            <p className="text-gray-400 text-lg">
                Descubrí las monedas digitales más relevantes del mercado y seguí sus movimientos minuto a minuto.
            </p>

            <p className="text-gray-400">
                Datos claros, confiables y actualizados sobre las principales criptomonedas: precios, capitalización, tendencias y más.
            </p>

            <ul className="space-y-3 text-gray-300">
                <li className="flex gap-2">🔍 <span className="font-semibold">Ranking actualizado</span> del mercado cripto</li>
                <li className="flex gap-2">📊 <span className="font-semibold">Gráficos en vivo</span> de precios y tendencias</li>
                <li className="flex gap-2">📰 Noticias del mercado al instante</li>
                <li className="flex gap-2">🔐 <span className="font-semibold">Datos confiables</span> y en tiempo real</li>
            </ul>

            <Link to="/cryptos">
                <button className="mt-4 bg-green-500 hover:bg-green-600 hover:cursor-pointer text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-lg transition-transform">
                explorar criptos
                </button>
            </Link>
            </div>

            <div className="flex justify-center">
            {display && (
                <img
                src="crypto-fondo.webp"
                alt="Criptomonedas y gráficas"
                className="rounded-xl shadow-2xl max-w-full"
                />
            )}
            </div>

        </section>
        </div>
    )
}
