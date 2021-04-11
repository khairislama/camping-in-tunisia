import axios from 'axios';
import React, { Component, useContext, useState } from 'react'
import { useHistory } from 'react-router';
import '../assets/stylesheets/register.css'
import AuthConext from '../context/AuthContext';

function Register() {
    const [username, setUsername] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState("");
    const {getLoggedIn} = useContext(AuthConext);
    const history = useHistory();

    async function register(e) {
        e.preventDefault();
        try{
            const registerData = {
                username,
                firstname,
                lastname,
                password,
                passwordVerify
            }
            await axios.post("http://localhost:3001/api/auth/register", registerData);
            await getLoggedIn();
            history.push("/campgrounds");
        }catch(err) {
            console.error(err);
        }
    }
    return (
        <form onSubmit={register}>
            <div className="registerContainer container">
                <h1 className="text-center">Sign Up</h1>
                <p className="text-center">Please fill in this form to create an account.</p>
                <hr className="registerHr" />

                <label for="email"><b>Email</b></label>
                <input className="registerInput" type="email" 
                placeholder="Enter Email" 
                name="username" 
                onChange={ (e) => setUsername(e.target.value) }
                value={ username }
                required/>

                <label for="email"><b>First Name</b></label>
                <input className="registerInput" type="text" 
                placeholder="Enter first name" name="firstname" 
                onChange={ (e) => setFirstname(e.target.value) }
                value={ firstname }
                required/>

                <label for="email"><b>Last Name</b></label>
                <input className="registerInput" type="text" 
                placeholder="Enter last name" name="lastname" 
                onChange={ (e) => setLastname(e.target.value) }
                value={ lastname }
                required/>

                <label for="psw"><b>Password</b></label>
                <input className="registerInput" type="password" 
                placeholder="Enter Password" name="password" 
                onChange={ (e) => setPassword(e.target.value) }
                value={ password }
                required/>

                <label for="psw-repeat"><b>Repeat Password</b></label>
                <input className="registerInput" type="password" 
                placeholder="Repeat Password" name="passwordVerify" 
                onChange={ (e) => setPasswordVerify(e.target.value) }
                value={ passwordVerify } required />

                <label>
                <input type="checkbox" checked="checked" name="remember" style={{marginBottom:"15px"}} /> Remember me
                </label>
                <p>
                    By creating an account you agree to our 
                    <a href="#" style={{color: "dodgerblue"}}>
                        Terms & Privacy
                    </a>.
                </p>
                <div className="registerClearfix">
                    <button type="button" className="registerCancelbtn registerbtn">Cancel</button>
                    <button type="submit" className="registerSignupbtn registerbtn">Sign Up</button>
                </div>
        </div>
        </form>
    )
}

export default Register;