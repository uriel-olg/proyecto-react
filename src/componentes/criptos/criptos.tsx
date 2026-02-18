import { Nav } from "../nav/nav"
import CryptoCard from "./Cryptocard"


export const Criptos = () =>{

    return (
        <>
        <Nav></Nav>
        <CryptoCard name="Bitcoin" symbol="BTC" image="moneda.png" price={323} change={true} ></CryptoCard>
        </>
    )
}