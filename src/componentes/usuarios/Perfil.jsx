
import { useContext } from "react";
import "./Perfil.css"
import { UserContext } from "../../context/UserContext";

const Perfil = ()=>{

    const usuario = useContext(UserContext)
    return (
        <div className="main-perfil">
            <h1>{usuario.name} {usuario.lastName}</h1>
                <ul className="ul">
                    <li className="li">email:
                        <span className="mayus">{usuario.email}</span>
                    </li>
                    <li className="li">usuario desde: 
                        <span className="mayus"> 2027</span>
                    </li>
                    <li className="li">foto de perfil 
                        <a href="https://reqres.in/img/faces/9-image.jpg" className="mayus"> click</a></li>
                </ul>
        </div>
    )
}

export default Perfil;