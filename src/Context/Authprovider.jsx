import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../Utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [userData, setuserData] = useState(null)

  useEffect(() => {
    setLocalStorage()
    const { employees, admin } = getLocalStorage();
    setuserData({ employees, admin })
  }, [])

  return (
    <AuthContext.Provider value={[userData, setuserData]}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider