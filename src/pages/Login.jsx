import React, { useState } from "react";
import axios from 'axios';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");

    const handleLogin =  async (event) => {
        event.preventDefault();
        setError(null);
        setLoading(true);
    
        try {
          const response = await axios.post('URL_DE_LA_API_DE_INICIO_DE_SESION', {
            username,
            password
          });
          localStorage.setItem('token', response.data.token);
          window.location.href = "/home";
        } catch (error) {
          if (error.response && error.response.status ===  401) {
            setError("Usuario o contraseña incorrectos");
          } else {
            setError("Ha ocurrido un error al intentar iniciar sesión");
          }
        } finally {
          setLoading(false);
        }
      };

    return(
<div className='Login'>
    <div className="align">
        <div className="grid">
        <form onSubmit={handleLogin} method="POST" className="form login">
        <div className="form__field">
            <label htmlFor="login__username">
                <img src='./user.png' height={22.5} width={22.5}/>
            <span className="hidden">Username</span></label>
            <input 
            autoComplete="username" 
            id="login__username" 
            type="text" 
            name="username" 
            className="form__input" 
            placeholder="Username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required/>
        </div>
        <div className="form__field">
            <label htmlFor="login__password">                   
                <img src='./padlock.png' height={22.5} width={22.5}/>
                <span className="hidden">Password</span>
            </label>
            <input 
            id="login__password" 
            type="password" 
            name="password" 
            className="form__input" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required/>
        </div>
        <div className="form__field">
            <input type="submit" disabled/>
        </div>
        </form>
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
</div>
    );
}

export default Login