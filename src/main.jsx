import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import App from "./App";
import Saludo from "./Saludo";
import Pag404 from "./Pag404";
import "./Main.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}>
        <Route path="/saludo" element={< Saludo/>}/>
        <Route path="*" element={< Pag404/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  
)

