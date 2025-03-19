import { createContext } from "react";
import { useState,useEffect } from "react";

const UserContext = createContext()

const UserContextProvider = ({children})=>{

    const [usuario,setUsuario] = useState({})

    useEffect(()=>{
        setUsuario({
        name:"uriel olguin",
        registered: "15/agosto/2022",
        })
    },[])


    return (
        <UserContext.Provider value={usuario}>
            {children}
        </UserContext.Provider>

    )
}

export {UserContext,UserContextProvider};