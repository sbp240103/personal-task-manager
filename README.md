# Personal Task Manager

A comprehensive web application built with React for managing personal tasks efficiently. This project demonstrates modern frontend development practices, including component-based architecture, routing, API integration, and user authentication.


---

![Task Manager Dashboard Screenshot](https://placehold.co/800x400/2d3748/ffffff?text=App+Screenshot+Here)
*(Suggestion: Replace the placeholder above with a screenshot of your application's dashboard)*

## ✨ Core Features

This application comes with a complete set of features to provide a seamless task management experience.

### 👤 **User Authentication**
* **User Registration:** Secure sign-up with name, email, and password.
* **User Login:** Authentication system with form validation and error handling.
* **Protected Routes:** Certain routes are protected and require user authentication, redirecting unauthorized users to the login page.

### 📊 **Dashboard**
* **At-a-Glance Overview:** Displays key statistics like total, completed, and pending tasks.
* **Welcome Message:** Personalized greeting for the logged-in user.
* **Recent Tasks:** A quick look at the most recently added tasks.
* **Quick Actions:** Buttons to quickly add a new task or view all tasks.

### ✅ **Task Management (CRUD)**
* **Create Tasks:** An intuitive form to add new tasks with a title, description, due date, and priority level.
* **View All Tasks:** A clean, organized list of all user tasks.
* **Filter & Sort:** Easily filter tasks by status (All, Completed, Pending, High Priority) and sort them by creation date, due date, or priority.
* **Search:** Instantly find tasks with a powerful search functionality.
* **Update Tasks:** Edit existing tasks with pre-populated forms and confirmation dialogs.
* **Delete Tasks:** Remove tasks with a confirmation step to prevent accidental deletion.
* **Mark as Complete:** Toggle the completion status of any task.

### ⚙️ **User Profile & Settings**
* **User Profile:** View and edit user information.
* **Change Password:** Functionality to update the account password.
* **Theme Toggle:** Switch between a light and dark mode for better visual comfort.

---

## 🛠️ Tech Stack & Tools

This project was built using a modern and robust technology stack:

* **Frontend:** [React.js](https://react.dev/) (with Hooks)
* **Routing:** [React Router](https://reactrouter.com/)
* **API Client:** [Axios](https://axios-http.com/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) / [Material-UI](https://mui.com/) *(Choose one or specify your choice)*
* **State Management:** React Context API
* **Notifications:** [React Toastify](https://fkhadra.github.io/react-toastify/introduction/) *(or similar)*

---

## 🚀 Getting Started

Follow these instructions to get a local copy of the project up and running for development and testing purposes.

### **Prerequisites**

Make sure you have the following installed on your machine:
* [Node.js](https://nodejs.org/en/) (v16 or newer)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### **Installation & Setup**

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/sbp240103/personal-task-manager.git](https://github.com/sbp240103/personal-task-manager.git)
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd personal-task-manager
    ```

3.  **Install the dependencies:**
    ```sh
    npm install
    ```

4.  **Set up environment variables:**
    Create a `.env` file in the root of the project and add the base URL for your backend API:
    ```
    VITE_API_BASE_URL=http://localhost:5000/api
    ```
    *(Note: The variable name must start with `VITE_` if you are using Vite)*

5.  **Run the development server:**
    ```sh
    npm run dev
    ```

The application should now be running on `http://localhost:5173` (or another port if specified).

---

## 🔌 API Integration

The frontend application consumes a backend API for all its data operations. The following endpoints are used:

| Method | Endpoint              | Description                      |
| :----- | :-------------------- | :------------------------------- |
| `POST` | `/api/auth/register`  | Register a new user.             |
| `POST` | `/api/auth/login`     | Log in an existing user.         |
| `GET`  | `/api/auth/profile`   | Get the logged-in user's profile.|
| `GET`  | `/api/tasks`          | Fetch all tasks for the user.    |
| `POST` | `/api/tasks`          | Create a new task.               |
| `GET`  | `/api/tasks/:id`      | Get a single task by its ID.     |
| `PUT`  | `/api/tasks/:id`      | Update a task by its ID.         |
| `DELETE`| `/api/tasks/:id`      | Delete a task by its ID.         |

---

## 📁 Folder Structure

The project follows a modular and organized folder structure to keep the code clean and maintainable.

```
/src
|-- /api             # Axios configuration and API service calls
|-- /components      # Reusable UI components (Button, Input, Modal, etc.)
|-- /context         # React Context for global state (AuthContext, ThemeContext)
|-- /hooks           # Custom hooks (e.g., useFetchData, useAuth)
|-- /pages           # Page-level components (Login, Dashboard, Tasks, etc.)
|-- /routes          # Routing configuration (e.g., ProtectedRoute)
|-- /styles          # Global styles and theme configuration
|-- /utils           # Utility functions and helpers
|-- App.jsx          # Main application component with routing setup
|-- main.jsx         # Entry point of the React application
```

---

## 👤 Author

**[Pushkar Singh]**

* GitHub: [@sbp240103](https://github.com/sbp240103)
* LinkedIn: [linkedin-profile](https://in.linkedin.com/in/pushkar-singh-5095362b6)
