import {Link} from "react-router-dom"
import "./Home.css"
const Home = ()=>{

    return (
        <>  
            <div className="mainHome">
                <h1 className="titulo">Bienvenido a HZ-market</h1>
                <p className="parrafo">Conoce las 100 criptos mas relevante del mercado</p>
                <Link to="/criptomonedas" className="detalles">ver criptomonedas</Link>
            </div>
            
        </>
    )
}

export default Home;

