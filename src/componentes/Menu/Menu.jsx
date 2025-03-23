import { useContext } from "react"
import "./Menu.css"
import {useNavigate,NavLink} from "react-router-dom"
import { UserContext } from "../../context/UserContext"



const Menu = () => {

    const usuario = useContext(UserContext)
    const navigation = useNavigate()

    return (
        <nav className="main-menu">
            <ul className="ul">
                <li><NavLink to="/" className="menu">Inicio</NavLink></li>
                <li><NavLink to="/criptomonedas" className="menu">CriptoMonedas</NavLink></li>
                <li><NavLink to="/perfil" className="menu">Perfil de {usuario.name}</NavLink></li>
                <li><a onClick={()=>{
                    localStorage.removeItem("tokenEdMarket")
                    navigation("/login")
                }} className="menu">Cerrar sesion</a></li>
            </ul>
        </nav>
    )
}

export default Menu;
