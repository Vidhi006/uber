import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {Start} from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/Captainlogin'
import CaptainSignup from './pages/CaptainSignup'
import Home from './pages/Home'
export default function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element = {<Start/>}/>
        <Route path='/login' element = {<UserLogin/>}/>
        <Route path='/signup' element = {<UserSignup/>}/>
        <Route path='/captain-login' element = {<CaptainLogin/>}/>
        <Route path='/Captain-Signup' element = {<CaptainSignup/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
  )
}
