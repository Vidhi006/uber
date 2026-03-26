import React, {  useEffect, useState, useContext } from 'react'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserProtectWrapper = ({
    children  //it is the component that we want to protect, we will render it only if the user is logged in
}) => {

    const token = localStorage.getItem('token')
    // we will check if the token is present in local storage, if it is not present then we will redirect the user to login page
    const navigate = useNavigate();
const { user, setUser } = useContext(UserDataContext)

    const[isLoading , setIsLoading] = useState(true)
    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
        axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                if (response.status === 200) {
                    setUser(response.data.user)
                    setIsLoading(false)
                }
            })
            .catch(err => {
                console.log(err)
                localStorage.removeItem('token')
                navigate('/login')
            })
    }, [token])
    return (
        <div>{children}</div>
    )
}

export default UserProtectWrapper