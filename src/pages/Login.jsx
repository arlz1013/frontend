

import Verify from "../data/LoginVerifi";

const Login = () => {
    return(
<div className='Login'>
    <div className="align">
        <div className="grid">
        <form onSubmit={Verify} method="POST" className="form login">
        <div className="form__field">
            <label htmlFor="login__username">
                <img src='./user.png' height={22.5} width={22.5}/>
            <span className="hidden">Username</span></label>
            <input 
            autoComplete="username" 
            type="text" 
            name="username" 
            className="form__input" 
            placeholder="Username" 
            id = "a"
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
            name="password" 
            className="form__input" 
            placeholder="Password" 
            id = "b"
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