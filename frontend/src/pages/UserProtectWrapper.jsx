import React, { useEffect } from 'react'
import {UserDataContext} from '../context/UserContext'
import { useNavigate } from 'react-router-dom'


const UserProtectWrapper = ({
    children  //it is the component that we want to protect, we will render it only if the user is logged in
}) => {
    
    const token = localStorage.getItem('token')
    // we will check if the token is present in local storage, if it is not present then we will redirect the user to login page
    const navigate = useNavigate();

    useEffect(() => {
        if(!token){
            navigate('/login')
        }
    }, [token])
  return (
    <div>{children}</div>
  )
}

export default UserProtectWrapper