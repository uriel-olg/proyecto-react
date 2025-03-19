
import { useContext } from "react";
import "./Perfil.css"
import { UserContext } from "../../context/UserContext";

const Perfil = ()=>{

    const usuario = useContext(UserContext)
    return (
        <div className="main-perfil">
            <h1> Perfil de {usuario.name}</h1>
            <div>
                Usuario desde: {usuario.registered}
            </div>
        </div>
    )
}

export default Perfil;