
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./componentes/App";
import Pag404 from "./componentes/Pag404";
import "./Main.css";
import Cuadricula from "./componentes/Cuadricula";
import Home from "./Home"
import CriptoPag from "./componentes/Cripto/CriptoPag";
import Perfil from "./componentes/usuarios/Perfil";
import { UserContextProvider } from "./context/UserContext";
import Login from "./componentes/usuarios/login";


ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home/>} />
          <Route path="perfil" element={<Perfil/>} />
        </Route>
        <Route path="/criptomonedas" element={<App />}> 
            <Route index element={<Cuadricula />}/>
            <Route path=":id" element={<CriptoPag/>}></Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Pag404 />} />
      </Routes>
    </BrowserRouter>
  </UserContextProvider>
  
  
);
