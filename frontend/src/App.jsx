import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import NotFound from './components/NotFound'
import Dashboard from './components/Dashboard'
import { Home } from './components/Home'
import { Route, Routes } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { setAuthHeader } from './helpers/axios_helper'
import Header from './components/Header'

function App() {

  console.log("ok")

  return (
    <main>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </main>
  )
}

export default App
