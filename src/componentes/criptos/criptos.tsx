import { useContext } from "react"
import { Nav } from "../nav/nav"
import { CryptoContext } from "../context/contextCryptos"
import { Load } from "../cargando/load"
import type { Crypto } from "../context/contextCryptos";
import CryptoCard from "./Cryptocard";



export const Criptos = () =>{

    const {crypto} = useContext(CryptoContext)

    if (!crypto || crypto.length === 0) {
        return <Load />
    }

    return (
        <>
            <Nav></Nav>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 p-10 gap-10 mt-10">
                {crypto.map((moneda:Crypto) => (
                    <CryptoCard
                        key={moneda.id}
                        id={moneda.id}
                        name={moneda.name}
                        rank={moneda.rank}
                        symbol={moneda.symbol}
                        image={`https://assets.coincap.io/assets/icons/${moneda.symbol.toLowerCase()}@2x.png`}
                        price={moneda.priceUsd}
                        change={Number(moneda.changePercent24Hr) > 0}
                        price24={moneda.changePercent24Hr}
                    />
                ))}
            </div>
        </>
        
    )
}