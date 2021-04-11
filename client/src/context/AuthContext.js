import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';

const AuthConext = createContext();

function AuthContextProvider(props) {
    const [loggedIn, setLoggedIn] = useState(undefined);

    async function getLoggedIn(){
        const loggedInRes = await axios.get("http://localhost:3001/api/auth/loggedIn");
        setLoggedIn(loggedInRes.data);
    }

    useEffect(()=>{
        getLoggedIn();
    }, [])

  return (
    <AuthConext.Provider value={{loggedIn, getLoggedIn}}>
      { props.children }
    </AuthConext.Provider>
  )
}

export default AuthConext;
export {AuthContextProvider};