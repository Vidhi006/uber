import React, { createContext, useState } from 'react'
//isse pure app ko wrap krna h

export const UserDataContext = createContext()
// createContext():
//Creates a global state container for React.You can access it anywhere in the app.

//UserDataContext.Provider:
//Wraps your app and provides data to all components.


const UserContext = ({ children }) => {
    const [user, setUser] = useState({
        email: '',
        fullName: {
            firstName: '',
            lastName: ''
        }
    })
    return (
        <div>
            <UserDataContext.Provider value={[user,setUser]}>
                {children}
            </UserDataContext.Provider>
        </div>
    )
}

export default UserContext