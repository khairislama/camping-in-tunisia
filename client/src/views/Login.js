import React, { Component } from 'react'
import '../assets/stylesheets/login.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: '',
        };
    }
    myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
    }
    mySubmitHandler = event => {
        event.preventDefault();
        // code goes here
    }
    render(){
        return (
            <form onSubmit={this.mySubmitHandler} className="loginForm">
                <div className="loginImgcontainer">
                    <img src="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg" 
                    alt="Avatar" 
                    className="loginAvatar"/>
                </div>
                <div className="container loginContainer">
                    <label for="username"><b>Email</b></label>
                    <input className="loginInput" type="text" placeholder="Enter Email" name="username" onChange={this.myChangeHandler} required/>
                    <label for="password"><b>Password</b></label>
                    <input className="loginInput"  type="password" placeholder="Enter Password" name="password" onChange={this.myChangeHandler} required/> 
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
}

export default Login;