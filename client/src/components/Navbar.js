import React, { useContext } from 'react'
import AuthConext from '../context/AuthContext'
import UserDropdown from "./UserDropdown"
import '../assets/stylesheets/navbar.css'

function Navbar() {

  const {loggedIn} = useContext(AuthConext);

  return (
    <div className= "mb-4">
      <nav 
        className="navbar navbar-expand-lg navbar-dark bg-dark sticky"
      >
      <a className="navbar-brand font-weight-bold" href="/"> <i className="fas fa-leaf mr-2"></i> 
        T<span>U</span>N<span>I</span>S<span>I</span>A<span>-</span>C<span>A</span>M<span>P</span>I<span>N</span>G <i className="fas fa-leaf"></i>
      </a> 
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active mr-3">
              <a className="nav-link" href="/campgrounds">GROUNDS <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active mr-3">
              <a className="nav-link" href="/campgrounds">FORUM</a>
            </li>
            <li className="nav-item active mr-3">
              <a className="nav-link" href="/products">SHOP</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/products">COMMUNITY</a>
            </li>
          </ul>
          <ul className="navbar-nav navbar-right ml-5">
            {
              loggedIn?.success === false && (
                <>
                  <li className="nav-item ml-5"><a className="nav-link" href="/login">LOGIN</a></li>
                  <li className="nav-item ml-4 mr-3"><a className="nav-link" href="/register">SIGN UP</a></li>
                </>
              )
            }
            {
              loggedIn?.success === true && (
                <>
                  <div className="nav-item mr-5">
                    <UserDropdown />
                  </div>
                </>
              )
            }
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar;