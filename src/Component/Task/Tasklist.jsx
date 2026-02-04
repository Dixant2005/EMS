import React from 'react'

const Tasklist = ({ data }) => {

  const handleComplete = (idx) => {
    const employees = JSON.parse(localStorage.getItem('employees'))


    const employeeIndex = employees.findIndex(e => e.id === data.id)

    if (employeeIndex !== -1) {

      const tasks = employees[employeeIndex].tasks



      const originalIndex = tasks.length - 1 - idx

      tasks[originalIndex].active = false
      tasks[originalIndex].completed = true
      tasks[originalIndex].newTask = false

      employees[employeeIndex].taskNumbers.active -= 1
      employees[employeeIndex].taskNumbers.completed += 1

      localStorage.setItem('employees', JSON.stringify(employees))
      console.log('Task Completed')
      window.location.reload()
    }
  }

  const handleFail = (idx) => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const employeeIndex = employees.findIndex(e => e.id === data.id)

    if (employeeIndex !== -1) {
      const tasks = employees[employeeIndex].tasks
      const originalIndex = tasks.length - 1 - idx

      tasks[originalIndex].active = false
      tasks[originalIndex].failed = true
      tasks[originalIndex].newTask = false

      employees[employeeIndex].taskNumbers.active -= 1
      employees[employeeIndex].taskNumbers.failed += 1

      localStorage.setItem('employees', JSON.stringify(employees))
      window.location.reload()
    }
  }


  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
      {data.tasks.slice().reverse().map((task, idx) => {
        return (
          <div key={idx} className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl flex flex-col justify-between'>
            <div>
              <div className='flex justify-between items-center text-sm'>
                <h3 className='bg-red-600 px-3 py-1 rounded'>{task.category}</h3>
                <h4 className='text-sm'>{task.date}</h4>
              </div>
              <h2 className='mt-5 text-2xl font-semibold'>{task.title}</h2>
              <p className='text-sm mt-2'>
                {task.description}
              </p>
            </div>
            <div className='mt-4'>
              {task.completed && <button className='w-full bg-green-600 rounded py-1 px-2 text-sm'>Completed</button>}
              {task.failed && <button className='w-full bg-red-600 rounded py-1 px-2 text-sm'>Failed</button>}
              {(task.active || task.newTask) && (
                <div className='flex justify-between mt-4'>
                  <button onClick={() => handleComplete(idx)} className='bg-green-500 py-1 px-2 text-sm rounded'>Mark as Completed</button>
                  <button onClick={() => handleFail(idx)} className='bg-red-500 py-1 px-2 text-sm rounded'>Mark as Failed</button>
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Tasklist