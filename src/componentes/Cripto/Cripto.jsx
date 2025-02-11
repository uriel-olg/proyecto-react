import "./Cripto.css"
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"
const CriptoMoneda =({nombre,precioUsd,codigo,variacion})=>{
    return (
        <div className="cripto">
            <h2>{nombre}</h2>
            <div className="info">
                <p><span className="label">Precio: </span>{parseFloat(precioUsd).toFixed(2)}</p>
                <p><span className="label">Codigo: </span>{codigo}</p>
                <p>
                    <span className="label">vairacion en 24hs: </span>
                    <span className={parseFloat(variacion).toFixed(2) > 0 ?  "positivo" : "negativo"}>
                    {parseFloat(variacion).toFixed(2)}%
                    </span>
                </p>
                <Link to={`criptomonedas`}>Ver detalles</Link>    
            </div>
        </div>              
    )

}

CriptoMoneda.propTypes = {
    nombre: PropTypes.string.isRequired,
    precioUsd:PropTypes.string.isRequired};

export  default CriptoMoneda;