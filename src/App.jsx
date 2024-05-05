import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styles from './Style/Global.module.css';
import { auth } from './firebase-config';
import { AuthContextProvider } from './context/Context';
import Login from './pages/Login';
import Account from './pages/Account';
import Logup from './pages/Logup';
import AddProfile from './pages/AddProfile';
import ProtectedRoute from './components/ProtectedRoute';




function App() {

  const [user, setUser] = useState(null)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email
      }
      if (userAuth) {
        console.log(userAuth)
        setUser(user)
      } else {
        setUser(null)
      }
    })
    return unsubscribe
  }, [])
  return (
    <div>
    <AuthContextProvider>
      <Routes >
        <Route path="/Logup" activeClassName="selected" element={<Logup />} />
      </Routes >

      <Routes >
        <Route path="/profil-erstellen" activeClassName="selected" element={<ProtectedRoute><AddProfile/></ProtectedRoute>} />
      </Routes >
      <Routes >
        <Route path="/Account" activeClassName="selected" element={<ProtectedRoute><Account /></ProtectedRoute>} />
      </Routes >
      <Routes >
        <Route path="/Login" activeClassName="selected" element={<Login />} />
      </Routes >


    </AuthContextProvider>
    </div>
  );
}

export default App;
