import "./Menu.css"
import {NavLink} from "react-router-dom"
const Menu = ()=>{
    return (
        <nav className="main-menu">
            <ul className="ul">
                <li><NavLink to="/" className="menu">Inicio</NavLink></li>
                <li><NavLink to="/criptomonedas" className="menu">CriptoMonedas</NavLink></li>
                <li><img src="./src/componentes/Menu/btc.png" className="foto"/></li>
            </ul>
        </nav>
    )
}

export default Menu;
