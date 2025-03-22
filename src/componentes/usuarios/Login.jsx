import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import "./Login.css"


const Login = ()=>{
    const navigation = useNavigate()

    const[user,setUser] = useState({
        email:"",
        password:""
    })

    const submit= (e) =>{
        e.preventDefault()
        axios.post("https://reqres.in/api/login", user)
        .then((data) => {
            console.log("Token recibido:", data.data.token); // ¿Se imprime el token aquí?
            localStorage.setItem("tokenEdMarket", data.data.token);
            console.log("Token guardado en localStorage.");
            navigation("/")
        })
        .catch((e) => {
            console.error("Error al intentar guardar el token:", e);
        });
    }

    return(
        <div className="login-container">
            
            
            <form onSubmit={submit} className="formulario">
                <h1>Inicar sesión</h1>
                <br />
                <div className="field">
                    <label htmlFor="email">Correo Electronico</label>
                    <br />
                    <input required onChange={(e)=>{
                        setUser({
                            ...user,
                            email:e.target.value
                        })
                    }} type="email" name="email"/>
                </div>
                <div className="field">
                    <label htmlFor="password">Contraseña</label>
                    <br />
                    <input required onChange={(e)=>{
                        setUser({
                            ...user,
                            password:e.target.value
                        })
                    }}  type="password" name="password"/>
                </div>

                <div className="submit">
                    <input type="submit" name="submit" />
                </div>

            </form>
        </div>
    )
}

export default Login;