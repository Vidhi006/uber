import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {Start} from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/Captainlogin'
import CaptainSignup from './pages/CaptainSignup'
import Home from './pages/Home'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/captainHome'

export default function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element = {<Start/>}/>
        <Route path='/login' element = {<UserLogin/>}/>
        <Route path='/signup' element = {<UserSignup/>}/>
        <Route path='/captain-login' element = {<CaptainLogin/>}/>
        <Route path='/Captain-Signup' element = {<CaptainSignup/>}/>
        <Route path='/home' element={
          
          <UserProtectWrapper>
            <Home/>
          </UserProtectWrapper>
        
        }/>
        <Route path="/user/logout" element={
          <UserProtectWrapper>
            <UserLogout/>
          </UserProtectWrapper>}
          />

        <Route path='/captain-home' element={<CaptainHome/>}/> 
      </Routes>
    </div>
  )
}

//home ko protect karne ke liye hum ek wrapper component banayenge jiska naam hoga UserProtectWrapper,
//  is component me hum check karenge ki user login hai ya nahi, agar user login nahi hai to hum usko login page par redirect kar denge, 
// agar user login hai to hum usko home page par le jayenge.