import React, { useContext } from 'react'
import AuthConext from '../context/AuthContext'
import Logout from "./Logout"

function Navbar() {

  const {loggedIn} = useContext(AuthConext);

  return (
    <div className= "mb-4">
      <nav 
        className="navbar navbar-expand-lg navbar-dark bg-dark sticky"
      >
      <a className="navbar-brand" href="/">Tunisia-camping</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active mr-3">
              <a className="nav-link" href="/campgrounds">Campgrounds <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active mr-3">
              <a className="nav-link" href="/campgrounds">Community</a>
            </li>
            <li className="nav-item active mr-3">
              <a className="nav-link" href="/blogs">Forum</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/products">Shop</a>
            </li>
          </ul>
          <ul className="navbar-nav navbar-right ml-5">
            {
              loggedIn === false && (
                <>
                  <li className="nav-item ml-5"><a className="nav-link" href="/login">login</a></li>
                  <li className="nav-item ml-4"><a className="nav-link" href="/register">Sign up</a></li>
                </>
              )
            }
            {
              loggedIn === true && (
                <>
                  <div className="nav-item">
                    <Logout />
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