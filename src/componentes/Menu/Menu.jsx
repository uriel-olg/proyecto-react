//import { useContext } from "react"
import "./Menu.css"
import {useNavigate,NavLink} from "react-router-dom"
//import { UserContext } from "../../context/UserContext"



const Menu = () => {

    const usuario = {name:"alexis",email:"alexis@gmail.com"}

    return (
        <nav className="main-menu">
            <ul className="ul-menu">
                <li><NavLink to="/" className="menu">Inicio</NavLink></li>
                <li><NavLink to="/criptomonedas" className="menu">CriptoMonedas</NavLink></li>
                <li><NavLink to="/perfil" className="menu">Perfil de {usuario.name}</NavLink></li>
            </ul>
        </nav>
    )
}

export default Menu;
