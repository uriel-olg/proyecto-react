import {Link} from "react-router-dom"

const Home = ()=>{

    return (
        <>
            <h1>bienvenido a HZ-market</h1>
            <p>Conoce las 100 criptos mas relevante del mercado</p>
            <Link to="/criptomonedas">ver criptomonedas</Link>
        </>
    )
}

export default Home;

