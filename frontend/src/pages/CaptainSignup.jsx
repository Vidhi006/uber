import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

function CaptainSignup() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const [vehicleColor, setVehicleColor] = useState('')
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [vehicleCapacity, setVehicleCapacity] = useState('')
  const [vehicleType, setVehicleType] = useState('')

  const { captain, setCaptain } = React.useContext(CaptainDataContext)

  const submitHandler = async (e) => {
    e.preventDefault()

    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      captainData
    )

    if (response.status === 201) {
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')
    }

    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleCapacity('')
    setVehicleType('')
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between items-center'>

      <div className='w-[360px]'>

        <img
          className='w-16 mb-8'
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />

        <form onSubmit={submitHandler}>

          <h3 className='text-sm font-medium mb-1'>What's your name</h3>

          <div className='flex gap-2 mb-4'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded px-3 py-1.5 border text-sm placeholder:text-xs'
              type="text"
              placeholder='First name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded px-3 py-1.5 border text-sm placeholder:text-xs'
              type="text"
              placeholder='Last name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>


          <h3 className='text-sm font-medium mb-1'>What's your email</h3>

          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] mb-4 rounded px-3 py-1.5 border w-full text-sm placeholder:text-xs'
            type="email"
            placeholder='email@example.com'
          />


          <h3 className='text-sm font-medium mb-1'>Enter Password</h3>

          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-[#eeeeee] mb-4 rounded px-3 py-1.5 border w-full text-sm placeholder:text-xs'
            type="password"
            placeholder='password'
          />


          <h3 className='text-sm font-medium mb-1'>Vehicle Information</h3>

          <div className='flex gap-2 mb-3'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded px-3 py-1.5 border text-sm placeholder:text-xs'
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
            />

            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded px-3 py-1.5 border text-sm placeholder:text-xs'
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
            />
          </div>


          <div className='flex gap-2 mb-4'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded px-3 py-1.5 border text-sm placeholder:text-xs'
              type="number"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
            />

            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded px-3 py-1.5 border text-sm'
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="">Select Vehicle</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>
          <button className='bg-[#111] text-white font-semibold mb-5 rounded px-3 py-2 w-full text-sm'>
            Create Captain Account
          </button>


          <p className='text-center text-xs'>
            Already have an account?{" "}
            <Link to='/captain-login' className='text-blue-600'>
              Login here
            </Link>
          </p>

        </form>

      </div>


      <div className='w-[360px]'>
        <p className="text-[10px] leading-tight text-center">
          This site is protected by reCAPTCHA and the
          <span className='underline'> Google Privacy Policy </span>
          and
          <span className='underline'> Terms of Service apply.</span>
        </p>
      </div>

    </div>
  )
}

export default CaptainSignup