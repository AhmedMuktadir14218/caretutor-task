# Task Manager

A simple task manager application built with Next.js, Redux, and Tailwind CSS. This application allows users to add, edit, delete tasks, and view them with pagination.
LiveLink:https://caretutor-task.vercel.app/
## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [State Management](#state-management)
- [Pagination](#pagination)
- [Contributing](#contributing)
- [License](#license)

## Project Description

This task manager application enables users to manage their tasks efficiently. Users can create, edit, delete tasks, and navigate through tasks using pagination. All tasks are saved in the browser's local storage.

## Features

- Create tasks with a title and description.
- Edit existing tasks.
- Delete tasks.
- View tasks with pagination (5 tasks per page).
- State management using Redux.
- Responsive design using Tailwind CSS.

## Technologies Used

- **Next.js**: A React framework for server-side rendering and static site generation.
- **Redux**: A predictable state container for JavaScript apps.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

## Setup and Installation

To set up and run the project locally, follow these steps:

1. **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/task-manager.git
    cd task-manager
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Run the development server:**

    ```sh
    npm run dev
    ```

4. Open your browser and navigate to `http://localhost:3000` to see the application running.

## Usage

### Adding a Task

1. Enter a title and description in the input fields.
2. Click the "Add" button to save the task.

### Editing a Task

1. Click the "Edit" button next to the task you want to edit.
2. Modify the title and/or description.
3. Click the "Update" button to save changes.

### Deleting a Task

1. Click the "Delete" button next to the task you want to remove.

### Pagination

- Navigate through tasks using the pagination buttons at the bottom of the task list.

## State Management

The application uses Redux for state management. The tasks are stored in the Redux store and persisted in the browser's local storage. The Redux store is defined in `src/redux/store.js`, and the tasks slice is managed in `src/redux/tasksSlice.js`.

