import axios from 'axios';
import React, { useContext } from 'react'
import { useHistory } from 'react-router';
import AuthConext from '../context/AuthContext'

function Logout() {

    const {getLoggedIn} = useContext(AuthConext);
    const history = useHistory();

    async function logout(){
        await axios.get("http://localhost:3001/api/auth/logout");
        await getLoggedIn();
        history.push("/campgrounds");
    }

  return (
    <button onClick={logout}>
      Logout
    </button>
  )
}

export default Logout