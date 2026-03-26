import React, {  useEffect, useContext, useState  } from 'react'
import {CaptainDataContext} from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainProtectWrapper = ({
    children  //it is the component that we want to protect, we will render it only if the user is logged in
}) => {
    
    const token = localStorage.getItem('token')
    // we will check if the token is present in local storage, if it is not present then we will redirect the user to login page
    const navigate = useNavigate();
    const {captain, setCaptain} = useContext(CaptainDataContext)
    const [isLoading , setIsLoading]= useState(true)
    useEffect(() => {
        if(!token){
            navigate('/captain-login')
        }
        
    }, [token])

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`,{
        headers: {
            Authorization: `Bearer ${token}`
        }   
    }).then(response=> {
        if(response.status === 200){
            setCaptain(response.data)
            setIsLoading(false)
        }   
    })
    .catch(error => {
        console.log(error)
        localStorage.removeItem('token')
        setIsLoading(false)
    })  // isme hmm captain ke profile ko fetch karenge,
    //  agar profile fetch ho jata hai to hum captain ke data ko set kar denge, aur loading ko false kar denge, 
    // agar error aata hai to hum error ko console me log kar denge, aur loading ko false kar denge.

    if(isLoading){
        return <div>Loading...</div>
    }   

  return (
    <div>{children}</div>
  )
}

export default CaptainProtectWrapper