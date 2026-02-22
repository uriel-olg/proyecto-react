import { useNavigate, useLocation } from "react-router-dom";


    


export const Nav = () =>{

    const navigate = useNavigate();
    const location = useLocation();

    const handleCrypto = () => {
        if (location.pathname === "/cryptos") return; // ⛔ Ya estás ahí
        navigate("/cryptos");
    } // ✅ Navega si no estás ahí

    const handleExchange = () => {
        if (location.pathname === "/exchanges") return; // ⛔ Ya estás ahí
        navigate("/exchanges");
    } // ✅ Navega si no estás ahí


    const handleInicio = () => {
        if (location.pathname === "/") return; // ⛔ Ya estás ahí
        navigate("/");
    } // ✅ Navega si no estás ahí



    return(
        <nav className="flex justify-between items-center px-8 py-5">
            <h2 className="text-xl font-semibold">CryptoLive</h2> 
            <ul className="flex gap-6 text-gray-300">
                <li className="hover:text-white cursor-pointer">
                    <button onClick={handleInicio}>Inicio</button>
                </li>
                <li className="hover:text-white cursor-pointer">
                    <button onClick={handleCrypto}>Cryptos</button>
                </li>
                <li className="hover:text-white cursor-pointer">
                    <button onClick={handleExchange}>Exchanges</button>
                </li>
            </ul>
        </nav>
    )

}