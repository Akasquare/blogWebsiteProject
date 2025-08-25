import React, { createContext, useState } from 'react'

export const UserDataContext = createContext();

export default function UserProvider({children}) {
    const [loggedInUser,setLoggedInUser ] = useState(null)
  return (
    <UserDataContext.Provider value={{loggedInUser,setLoggedInUser}}>
        {children}
    </UserDataContext.Provider>
  )
}
