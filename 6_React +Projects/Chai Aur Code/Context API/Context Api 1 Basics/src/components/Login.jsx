import React, { useState } from 'react';
import UserContext from '../context/UserContext';
import { useContext } from 'react';

const Login = () => {
    const [username,SetUsername]=useState('');
    const [password,SetPassword]=useState('');
    const { user,setUser }=useContext(UserContext);
    let handelSubmit=(e)=>{
        e.preventDefault();
        console.log(user);
        setUser({username,password})
    }
        return (
        <div>
            <h1>Login Page</h1>
            <input type='text' placeholder='Enter username' value={username} onChange={(e)=>SetUsername(e.target.value)}/>
            <input type='password' placeholder='Enter password' value={password} onChange={(e)=>SetPassword(e.target.value)}/>
            <button onClick={handelSubmit}>Submit</button>
        </div>
    );
}

export default Login;
