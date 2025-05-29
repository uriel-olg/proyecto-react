
import "./Perfil.css"


const Perfil = ()=>{

    const usuario = {
        name:"alex",
        email:"alex@gmail.com",
    }
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
                        
                        </li>
                </ul>
        </div>
    )
}

export default Perfil;