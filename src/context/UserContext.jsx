/*import axios from "axios";
import { createContext } from "react";
import { useState,useEffect } from "react";

const UserContext = createContext()
//const key = "reqres-free-v1"
const UserContextProvider = ({children})=>{

    const [usuario,setUsuario] = useState({
        name:"",
        lastName:"",
        email:"",
        avatar:""
    })
    //let keys = "reqres-free-v1"
    useEffect(()=>{
        axios.get("https://reqres.in/api/users/7",
            {headers:{
                "Authorization" : "Bearer reqres-free-v1 ",
                "clave x-api ": "reqres-free-v1"
            }}
            
        )
        .then((response)=>{
            setUsuario({
                name: response.data.data.first_name,
                lastName:response.data.data.last_name,
                email:response.data.data.email,
                avatar:response.data.data.avatar
            })
            console.log("usuario encontrado",response.data)
        })
        .catch(e=> console.log(e))
    },[])


    return (
        <UserContext.Provider value={usuario}>
            {children}
        </UserContext.Provider>

    )
}

export {UserContext,UserContextProvider};
*/