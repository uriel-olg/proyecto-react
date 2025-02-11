import {Link} from "react-router-dom"

const Home = ()=>{

    return (
        <>
            <h1>Hola,bienbenido a HZmarket</h1>
            <p>Conoce las 100 criptos mas relevante del mercado</p>
            <Link to="/criptomonedas">ver cripto</Link>
        </>
    )
}

export default Home;