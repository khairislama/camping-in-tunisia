import React, { Component } from 'react'
import '../assets/stylesheets/register.css'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            firstname: '',
            lastname: '',
            password: '',
            passwordRepeat: ''
        };
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }
    mySubmitHandler = event => {
        event.preventDefault();
        // code goes here
    }
    render() {
        return (
            <form onSubmit={this.mySubmitHandler}>
                <div className="registerContainer container">
                    <h1 className="text-center">Sign Up</h1>
                    <p className="text-center">Please fill in this form to create an account.</p>
                    <hr className="registerHr" />

                    <label for="email"><b>Email</b></label>
                    <input className="registerInput" type="text" placeholder="Enter Email" name="username" onChange={this.myChangeHandler} required/>

                    <label for="email"><b>First Name</b></label>
                    <input className="registerInput" type="text" placeholder="Enter first name" name="firstname" onChange={this.myChangeHandler} required/>

                    <label for="email"><b>Last Name</b></label>
                    <input className="registerInput" type="text" placeholder="Enter last name" name="lastname" onChange={this.myChangeHandler} required/>

                    <label for="psw"><b>Password</b></label>
                    <input className="registerInput" type="password" placeholder="Enter Password" name="password" onChange={this.myChangeHandler} required/>

                    <label for="psw-repeat"><b>Repeat Password</b></label>
                    <input className="registerInput" type="password" placeholder="Repeat Password" name="passwordRepeat" onChange={this.myChangeHandler} required />

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
}

export default Register;