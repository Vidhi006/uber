import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
      <h5 className='p-1 text-center w-[90%]  absolute top-0' onClick={() => {
          props.setVehiclePanel(false)
        }}><i className=" text-3xl text-gray-200 ri-arrow-down-wide-line" /></h5>
        
        <h3 className='text-2xl font-semibold mb-5'>Choose a vehicle</h3>

        <div onClick={()=> {
          props.setConfirmRidePanel(true)
        }}className='flex w-full p-3 border-2 mb-2 active:border-black  rounded-xl items-center justify-between'>
          <img className='h-14' src="data:image/jpeg;base64,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" alt="" />

          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-fill"></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-medium text-xs text-gray-600'>Affordable , Compact rides </p>
          </div>
          <h2 className='text-lg font-semibold'>₹193</h2>
        </div>

        <div onClick={()=> {
          props.setConfirmRidePanel(true)
        }} className='flex w-full p-3 border-2 mb-2 active:border-black rounded-xl items-center justify-between'>
          <img className='h-14' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=552/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85NTM4NTEyZC1mZGUxLTRmNzMtYmQ1MS05Y2VmZjRlMjU0ZjEucG5n" alt="" />

          <div className='ml-9 w-1/2'>
            <h4 className='font-medium text-base'>Moto <span><i className="ri-user-fill"></i>1</span></h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-medium text-xs text-gray-600'>Affordable motorcycle rides </p>
          </div>
          <h2 className='text-lg font-semibold'>₹65</h2>
        </div>

        <div onClick={()=> {
          props.setConfirmRidePanel(true)
        }} className='flex w-full p-3 border-2 mb-2 active:border-black rounded-xl items-center justify-between'>
          <img className='h-14' src="https://clipart-library.com/2023/Uber_Auto_312x208_pixels_Mobile.png" alt="" />

          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-fill"></i>3</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-medium text-xs text-gray-600'>Affordable Auto rides </p>
          </div>
          <h2 className='text-lg font-semibold'>₹118</h2>
        </div></div>
  )
}

export default VehiclePanel