import { NavLink } from "react-router-dom";

export const Nav = () => {
    return (
        <nav className="flex justify-between items-center px-8 py-5">
            <h2 className="min-text-l text-xl font-semibold">CryptoLive</h2>
            <ul className="flex gap-6 text-l">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-white" : "text-gray-300 hover:text-white transition"
                        }
                    >
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/cryptos"
                        className={({ isActive }) =>
                            isActive ? "text-white" : "text-gray-300 hover:text-white transition"
                        }
                    >
                        Cryptos
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/exchanges"
                        className={({ isActive }) =>
                            isActive ? "text-white" : "text-gray-300 hover:text-white transition"
                        }
                    >
                        Exchanges
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};