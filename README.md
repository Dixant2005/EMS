# Employee Management System (EMS)

The **Employee Management System (EMS)** is a React-based web application designed to manage tasks between **Administrators** and **Employees**.  
It provides role-based dashboards where admins can assign and monitor tasks, and employees can update task statuses.

This project uses **Browser LocalStorage** to simulate backend data persistence and authentication.

---

## 🚀 Project Overview

The EMS application helps manage day-to-day task assignment and tracking within an organization.

### Admin Capabilities
- Assign tasks to specific employees
- View all active tasks across the organization
- Delete tasks when required
- Track employee task progress

### Employee Capabilities
- View assigned tasks
- Mark tasks as **Completed** or **Failed**
- View task statistics (New, Active, Completed, Failed)

---

## 🛠 Tech Stack

- **Frontend Framework:** React.js (Vite)
- **Styling:** Tailwind CSS
- **State Management:** React Context API
- **Persistence:** Browser LocalStorage
- **Language:** JavaScript (JSX)

---

## 🔄 Application Flow

### Initialization
- `main.jsx` wraps the app with `AuthProvider`
- Default admin and employee data is seeded using `LocalStorage.jsx`
- User session is checked from LocalStorage on reload

### Authentication
- Login using email and password
- Credentials are validated against stored user data
- Session is saved in LocalStorage

### Admin Workflow
- Access Admin Dashboard after login
- Create tasks using a form (Title, Date, Assign To, Category, Description)
- Tasks are assigned to selected employees
- Admin can view and delete assigned tasks

### Employee Workflow
- Access Employee Dashboard after login
- View task statistics
- Update task status as **Completed** or **Failed**
- Task data updates persist across page reloads

---

## 📁 Project Structure

src/
├── App.jsx
├── main.jsx
├── Context/
│ └── Authprovider.jsx
├── Utils/
│ └── LocalStorage.jsx
├── Component/
│ ├── Auth/
│ │ └── Login.jsx
│ ├── Dashbord/
│ │ ├── AdminDashboed.jsx
│ │ └── EmployDashbord.jsx
│ ├── Task/
│ │ ├── Tasklist.jsx
│ │ ├── NewTask.jsx
│ │ ├── CompleteTask.jsx
│ │ ├── FailedTask.jsx
│ │ └── AccpetTask.jsx
│ └── Other/
│ ├── Header.jsx
│ ├── Createdev.jsx
│ └── TasklistConatiner.jsx



---

## 📌 Key Features

- Role-based access (Admin / Employee)
- Global state management using Context API
- Task CRUD operations
- Persistent data using LocalStorage
- Conditional UI rendering
- Responsive UI with Tailwind CSS

---

## 📚 Learning Outcomes

This project helped in understanding:
- React Context API for global state
- LocalStorage data handling
- Basic authentication and session management
- CRUD operations in React
- Component-based architecture
- Conditional rendering based on roles and task status

---

## ▶️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Dixant2005/EMS.git
