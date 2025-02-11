import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./componentes/App";
import Saludo from "./componentes/Saludo";
import Pag404 from "./componentes/Pag404";
import "./Main.css";
import Cuadricula from "./componentes/Cuadricula";
import Home from "./Home"
import CriptoPag from "./componentes/Cripto/CriptoPag";




ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home/>} />
        </Route>
        <Route path="/criptomonedas" element={<App />}> 
            <Route index element={<Cuadricula />}/>
            <Route path=":id" element={<CriptoPag/>}></Route>
        </Route>

        <Route path="*" element={<Pag404 />} />
      </Routes>
    </BrowserRouter>
  </>
  
  
);
