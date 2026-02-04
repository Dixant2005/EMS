// ================= EMPLOYEES DATA =================
const employees = [
    {
        id: 1,
        firstName: "Rahul",
        email: "employee1@example.com",
        password: "123",
        taskNumbers: {
            active: 5,
            newTask: 3,
            completed: 66,
            failed: 2,
        },
        tasks: [
            {
                title: "Design Login Page",
                description: "Create a modern login UI using Tailwind CSS",
                date: "2026-09-20",
                category: "Design",
                active: true,
                newTask: true,
                completed: false,
                failed: false,
            },
            {
                title: "Fix Navbar Bug",
                description: "Resolve alignment issues in navbar",
                date: "2026-09-18",
                category: "Development",
                active: false,
                newTask: false,
                completed: true,
                failed: false,
            },
            {
                title: "Update README",
                description: "Add project setup instructions",
                date: "2026-09-15",
                category: "Documentation",
                active: false,
                newTask: false,
                completed: false,
                failed: true,
            },
        ],
    },

    {
        id: 2,
        firstName: "Aman",
        email: "employee2@example.com",
        password: "123",
        taskNumbers: {
            active: 8,
            newTask: 4,
            completed: 54,
            failed: 3,
        },
        tasks: [
            {
                title: "API Integration",
                description: "Integrate user API with dashboard",
                date: "2026-09-25",
                category: "Development",
                active: true,
                newTask: true,
                completed: false,
                failed: false,
            },
            {
                title: "Optimize Images",
                description: "Compress and optimize website images",
                date: "2026-09-22",
                category: "Performance",
                active: true,
                newTask: false,
                completed: false,
                failed: false,
            },
            {
                title: "Fix Footer UI",
                description: "Correct spacing and colors in footer",
                date: "2026-09-17",
                category: "Design",
                active: false,
                newTask: false,
                completed: true,
                failed: false,
            },
            {
                title: "Deploy Preview",
                description: "Deploy preview build on Vercel",
                date: "2026-09-14",
                category: "Deployment",
                active: false,
                newTask: false,
                completed: false,
                failed: true,
            },
        ],
    },

    {
        id: 3,
        firstName: "Neha",
        email: "employee3@example.com",
        password: "123",
        taskNumbers: {
            active: 6,
            newTask: 2,
            completed: 72,
            failed: 1,
        },
        tasks: [
            {
                title: "Create Dashboard Cards",
                description: "Build stats cards using Tailwind",
                date: "2026-09-23",
                category: "UI",
                active: true,
                newTask: true,
                completed: false,
                failed: false,
            },
            {
                title: "Dark Mode Toggle",
                description: "Add light/dark mode switch",
                date: "2026-09-21",
                category: "Feature",
                active: true,
                newTask: false,
                completed: false,
                failed: false,
            },
            {
                title: "Refactor Components",
                description: "Clean up reusable components",
                date: "2026-09-16",
                category: "Code Quality",
                active: false,
                newTask: false,
                completed: true,
                failed: false,
            },
        ],
    },

    {
        id: 4,
        firstName: "Priya",
        email: "employee4@example.com",
        password: "123",
        taskNumbers: {
            active: 4,
            newTask: 1,
            completed: 48,
            failed: 4,
        },
        tasks: [
            {
                title: "Write Test Cases",
                description: "Add unit tests for auth flow",
                date: "2026-09-26",
                category: "Testing",
                active: true,
                newTask: true,
                completed: false,
                failed: false,
            },
            {
                title: "Bug Fix: Login",
                description: "Fix login redirect issue",
                date: "2026-09-19",
                category: "Bug Fix",
                active: false,
                newTask: false,
                completed: true,
                failed: false,
            },
            {
                title: "Performance Audit",
                description: "Analyze and improve load time",
                date: "2026-09-13",
                category: "Performance",
                active: false,
                newTask: false,
                completed: false,
                failed: true,
            },
        ],
    },

    {
        id: 5,
        firstName: "Rohit",
        email: "employee5@example.com",
        password: "123",
        taskNumbers: {
            active: 7,
            newTask: 3,
            completed: 61,
            failed: 2,
        },
        tasks: [
            {
                title: "Create Landing Page",
                description: "Design landing page hero section",
                date: "2026-09-24",
                category: "Design",
                active: true,
                newTask: true,
                completed: false,
                failed: false,
            },
            {
                title: "SEO Optimization",
                description: "Improve meta tags and SEO score",
                date: "2026-09-20",
                category: "SEO",
                active: true,
                newTask: false,
                completed: false,
                failed: false,
            },
            {
                title: "Remove Console Logs",
                description: "Clean production code",
                date: "2026-09-12",
                category: "Cleanup",
                active: false,
                newTask: false,
                completed: true,
                failed: false,
            },
        ],
    },
];

const admin = [
    {
        "id": 1,
        "firstName": "Admin",
        "email": "admin@example.com",
        "password": "123"
    }
];

export const setLocalStorage = () => {
    if (!localStorage.getItem('employees')) {
        localStorage.setItem('employees', JSON.stringify(employees))
    }
    if (!localStorage.getItem('admin')) {
        localStorage.setItem('admin', JSON.stringify(admin))
    }
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return { employees, admin }
}
