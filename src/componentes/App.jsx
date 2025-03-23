import {Navigate,Outlet} from "react-router-dom"
import Menu from "./Menu/Menu"

const App = ()=>{

    if(!localStorage.getItem("tokenEdMarket")) return <Navigate to="/login" />

    return (
        <>
            <Menu />
            <Outlet />
        </>
    )
}

export default App;