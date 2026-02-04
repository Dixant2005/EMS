import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/Authprovider'

const Createdev = () => {

  const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask, setNewTask] = useState({})

  const deleteTask = (empId, taskIdx) => {
    const data = { ...userData }
    const employees = [...data.employees]
    const empIndex = employees.findIndex(e => e.id === empId)

    if (empIndex !== -1) {
      const task = employees[empIndex].tasks[taskIdx]

      // Update counts
      if (task.active) employees[empIndex].taskNumbers.active -= 1
      if (task.newTask) employees[empIndex].taskNumbers.newTask -= 1
      if (task.completed) employees[empIndex].taskNumbers.completed -= 1
      if (task.failed) employees[empIndex].taskNumbers.failed -= 1

      // Remove task
      employees[empIndex].tasks.splice(taskIdx, 1)

      // Update state and storage
      setUserData({ ...data, employees })
      localStorage.setItem('employees', JSON.stringify(employees))
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const newTask = { title: taskTitle, description: taskDescription, date: taskDate, category, active: true, newTask: true, failed: false, completed: false }

    const data = userData

    data.employees.forEach(function (elem) {
      if (asignTo == elem.firstName) {
        elem.tasks.push(newTask)
        elem.taskNumbers.newTask = elem.taskNumbers.newTask + 1
      }
    })
    setUserData(data)
    localStorage.setItem('employees', JSON.stringify(data.employees))
    console.log(data)

    setTaskTitle('')
    setCategory('')
    setAsignTo('')
    setTaskDate('')
    setTaskDescription('')
  }

  return (
    <div>

      <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
        <form onSubmit={(e) => {
          submitHandler(e)
        }}
          className="flex flex-wrap w-full items-start justify-between"
        >
          <div className='w-1/2'>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
                value={taskTitle}
                onChange={(e) => {
                  setTaskTitle(e.target.value)
                }}
                type="text"
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                placeholder="Make a UI design"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input
                value={taskDate}
                onChange={(e) => {
                  setTaskDate(e.target.value)
                }}
                type="date"
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Asign to</h3>
              <select
                value={asignTo}
                onChange={(e) => {
                  setAsignTo(e.target.value)
                }}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 placeholder:text-gray-400"
                style={{ backgroundColor: '#1c1c1c', color: 'white' }}
              >
                <option value="">Select Employee</option>
                {userData && userData.employees && userData.employees.map((item) => {
                  return <option key={item.id} value={item.firstName}>{item.firstName}</option>
                })}
              </select>
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value)
                }}
                type="text"
                placeholder="design, dev, etc"
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              />
            </div>
          </div>

          <div className='w-2/5 flex flex-col items-start'>
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
              value={taskDescription}
              onChange={(e) => {
                setTaskDescription(e.target.value)
              }}
              className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
              name=""
              id=""
            ></textarea>
            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">Create Task</button>
          </div>
        </form>
      </div>

      {/* ================= Task List ================= */}
      <div className="bg-[#1c1c1c] p-5 rounded mt-5">
        <h2 className="text-2xl font-semibold mb-4 text-emerald-400">Current Tasks</h2>
        <div className="space-y-4 max-h-80 overflow-auto">
          {userData && userData.employees && userData.employees.map((emp) => {
            return emp.tasks.map((task, idx) => {
              return (
                <div key={idx} className="border border-gray-700 rounded-xl p-5 flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{task.title}</h3>
                    <p className="text-sm text-gray-400 mt-1">{task.description}</p>
                    <div className="flex gap-3 mt-3 text-xs">
                      <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400">
                        {task.category}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-400">
                        Assigned: {emp.firstName}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400">
                        {task.date}
                      </span>
                    </div>
                  </div>
                  <button onClick={() => deleteTask(emp.id, idx)} className="text-red-400 hover:text-red-300 text-sm">Delete</button>
                </div>
              )
            })
          })}
        </div>
      </div>
    </div>
  )
}

export default Createdev
