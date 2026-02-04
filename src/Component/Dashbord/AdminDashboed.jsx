import React from 'react'
import Header from '../other/Header'
import Createdev from '../other/Createdev'

const AdminDashboed = ({ changeUser }) => {
  return (
    <div className='h-screen w-full p-10'>
      <Header changeUser={changeUser} />
      <Createdev />
    </div>
  )
}

export default AdminDashboed
