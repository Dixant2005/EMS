import React from 'react'
import Header from '../other/Header'
import TasklistConatiner from '../other/TasklistConatiner'
import Tasklist from '../Task/Tasklist'

const EmployDashbord = ({ data, changeUser }) => {
  console.log(data.id)
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen w-screen'>
      <Header changeUser={changeUser} data={data} />
      <TasklistConatiner data={data} />
      <Tasklist data={data} />


    </div>
  )
}

export default EmployDashbord