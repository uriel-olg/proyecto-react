import { useState } from "react";
import axios from "axios"
const Login = ()=>{

    const[user,setUser] = useState({
        email:"",
        password:""
    })

    const submit= (e) =>{
        e.preventDefault()
        axios.post("https://https://reqres.in/api/login",user)
        .then(data =>console.log(data))
        .catch(e => console.log(e))
    }

    return(
        <div className="login-conteiner">
            <h1>Inicar sesión</h1>
            <form onSubmit={submit}>
                <div className="field">
                    <label htmlFor="email">Correo Electronico</label>
                    <input required onChange={(e)=>{
                        setUser({
                            ...user,
                            email:e.target.value
                        })
                    }} type="email" name="email"/>
                </div>
                <div className="field">
                    <label htmlFor="password">Contraseña</label>
                    <input required onChange={(e)=>{
                        setUser({
                            ...user,
                            password:e.target.value
                        })
                    }}  type="password" name="email"/>
                </div>
                <div className="submit">
                    <input type="submit" name="Ingresar" />
                </div>

            </form>
        </div>
    )
}

export default Login;