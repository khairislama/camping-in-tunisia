import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import Router from './Router';
import { AuthContextProvider } from './context/AuthContext';

axios.defaults.withCredentials = true;

function App() {
  return (
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
  );
}

export default App;
