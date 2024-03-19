//import Verify from "../data/LoginVerifi";
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [credentials, setCredentials] = useState({ name: '', pasw: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:8000/api/log/', credentials);
        // Guardar el token JWT en el almacenamiento local o en el estado de la aplicación
        localStorage.setItem('access_token', response.data.access);
        // Redirigir al usuario a la página principal o al dashboard
        navigate('/home');
      } catch (error) {
        console.error(error);
        // Mostrar un mensaje de error
      }
    };
  

    return(
<div className='Login'>
    <div className="align">
        <div className="grid">
        <form onSubmit={handleSubmit} className="form login">
        <div className="form__field">
            <label htmlFor="login__username">
                <img src='./user.png' height={22.5} width={22.5}/>
            <span className="hidden">Username</span></label>
            <input 
            autoComplete="username" 
            type="text" 
            name="name" 
            className="form__input" 
            placeholder="Username" 
            value={credentials.name}
            onChange={handleChange}
            required
            /> 
        </div>
        <div className="form__field">
            <label htmlFor="login__password">                   
                <img src='./padlock.png' height={22.5} width={22.5}/>
                <span className="hidden">Password</span>
            </label>
            <input 
            type="password" 
            name="pasw" 
            className="form__input" 
            placeholder="Password" 
            value={credentials.pasw}
            onChange={handleChange}
            required
            />
        </div>
        <div className="form__field">
            <input
            type="submit" 
            />
        </div>
        </form>
        </div>
    </div>
</div>
    );
}

export default Login