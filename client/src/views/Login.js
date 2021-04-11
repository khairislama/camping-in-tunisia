import axios from 'axios';
import React, { Component, useContext, useState } from 'react'
import { useHistory } from 'react-router';
import '../assets/stylesheets/login.css'
import AuthConext from '../context/AuthContext';


function Login() {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {getLoggedIn} = useContext(AuthConext);
    const history = useHistory();

    async function login(e) {
        e.preventDefault();
        try{
            const loginData = {
                username,
                password
            }
            await axios.post("http://localhost:3001/api/auth/login", loginData);
            await getLoggedIn();
            history.push("/campgrounds");
        }catch (err) {
            console.error(err);
        }
    }

    return (
        <form onSubmit={login} className="loginForm">
            <div className="loginImgcontainer">
                <img src="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg" 
                alt="Avatar" 
                className="loginAvatar"/>
            </div>
            <div className="container loginContainer">
                <label for="username"><b>Email</b></label>
                <input className="loginInput" type="text" 
                placeholder="Enter Email" name="username" 
                onChange={(e)=> setUsername(e.target.value)}
                value={username}
                required/>
                <label for="password"><b>Password</b></label>
                <input className="loginInput"  type="password" 
                placeholder="Enter Password" name="password" 
                onChange={ (e)=> setPassword(e.target.value) }
                value={password} 
                required/> 
                <button className="loginBtn" type="submit">Login</button>
                <label>
                <input type="checkbox" checked="checked" name="remember"/> Remember me
                </label>
            </div>
            <div className="container" style={{backgroundColor: "#f1f1f1" }}>
                <button type="button" className="loginCancelbtn loginBtn">Cancel</button>
                <span className="loginPsw">Forgot <a href="#">password?</a></span>
            </div>
        </form>
    )
}

export default Login;