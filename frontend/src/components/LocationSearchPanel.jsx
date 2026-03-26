import React from 'react'

const LocationSearchPanel = (props) => {
    console.log(props)
    const locations = [
        "24B , Shanti Nagar , Panipat",
        "22A , Shanti Nagar , Panipat",
        "20C , Shanti Nagar , Panipat",
        "18D , Shanti Nagar , Panipat",
    ]
    return (
        <div>
            {/*this is sample data*/}
            {
                locations.map(function (element , idx) {
                    return <div key={idx} onClick = {() => {
                        props.setVehiclePanel(true)
                        props.setPanelOpen(false)
                    }}
                     className='flex gap-4 border-2 p-3 border-gray-100 active:border-black rounded-xl items-center my-2 justify-start'>
                        <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'>
                            <i className="ri-map-pin-line" text-xl></i>
                        </h2>
                        <h4 className='font-medium'>{element}</h4>
                    </div>
                })
            }
            
            
        </div>
    )
}

export default LocationSearchPanel