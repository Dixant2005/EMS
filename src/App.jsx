import React, { useContext, useEffect, useState } from 'react'
import Login from './Component/Auth/Login'
import EmployDashbord from './Component/Dashbord/EmployDashbord'
import Header from './Component/other/Header'
import AdminDashboed from './Component/Dashbord/AdminDashboed'
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage'
import { AuthContext } from './Context/Authprovider'


const App = () => {

  const [user, setuser] = useState(null)
  const [laggedInUserData, setlaggedInUserData] = useState(null)
  const [Authdata] = useContext(AuthContext)
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)

      if (userData.role === 'employee') {
        const employees = JSON.parse(localStorage.getItem('employees'))
        const employee = employees.find(e => e.id === userData.data.id)

        if (employee) {
          setuser('employee')
          setlaggedInUserData(employee)

          localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
        } else {

          setuser(userData.role)
          setlaggedInUserData(userData.data)
        }
      } else {
        setuser(userData.role)
        setlaggedInUserData(userData.data)
      }
    }
  }, [])


  const handlogin = (email, password) => {
    if (Authdata) {
      const admin = Authdata.admin.find((e) => email.trim() == e.email && password == e.password)
      if (admin) {
        setuser('admin')
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      } else {
        const employee = Authdata.employees.find((e) => email == e.email && password == e.password)
        if (employee) {
          setuser('employee')
          setlaggedInUserData(employee)
          localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
        } else {
          alert("Invaild Credentials")
        }
      }
    } else {
      alert("Invaild Credentials")
    }
  }






  return (


    <>

      {!user ? <Login handlogin={handlogin} /> : ''}
      {user == 'admin' ? <AdminDashboed changeUser={setuser} /> : (user == 'employee' ? <EmployDashbord changeUser={setuser} data={laggedInUserData} /> : null)}



    </>
  )
}

export default App