import { Link } from "react-router-dom"
export const Nav = () =>{

    return(
        <nav className="flex justify-between items-center px-8 py-5">
            <h2 className="text-xl font-semibold">CryptoLive</h2> 
            <ul className="flex gap-6 text-gray-300">
                <li className="hover:text-white cursor-pointer">
                    <Link to="/">Inicio</Link>
                </li>
                <li className="hover:text-white cursor-pointer">
                    <Link to="/Noticias">Noticias</Link>
                </li>
                <li className="hover:text-white cursor-pointer">
                    <Link to="/Login">Iniciar Sesión</Link></li>
            </ul>
        </nav>
    )

}