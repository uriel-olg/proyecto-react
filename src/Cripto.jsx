import "./Cripto.css"
import PropTypes from 'prop-types'



const CriptoMoneda =({nombre,precioUsd})=>{

    return (
        <div className="cripto">
            <h3>{nombre}</h3>
            <p>{precioUsd}</p>
        </div>
    )
    
}

CriptoMoneda.propTypes = {
    nombre: PropTypes.string.isRequired,
    precioUsd:PropTypes.string.isRequired};

export  default CriptoMoneda;