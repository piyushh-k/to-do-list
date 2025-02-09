# React To-Do List App

![Screenshot](https://github.com/piyushh-k/to-do-list/blob/ebd27fc6ab958adc97763f764f63a9d07dae85fc/todo.png)


## Introduction

This is a simple To-Do List application built using React. The app allows users to add, remove, and reorder tasks in their to-do list.

## Features

- **Add Task**: Users can add new tasks to the to-do list.
- **Remove Task**: Users can remove tasks from the to-do list.
- **Reorder Tasks**: Users can move tasks up or down in the list to prioritize them.

## Components

### `ToDoList`

This is the main component of the application. It manages the state of the tasks and renders the UI.

#### State

- `tasks`: An array of task strings. It stores the list of tasks.
- `tasksCheck`: A string that stores the current input value for the new task.

#### Functions

- `addTask()`: Adds a new task to the list if the input is not empty.
- `removeTask(index)`: Removes a task from the list based on its index.
- `taskUp(index)`: Moves a task up in the list if it's not already at the top.
- `taskDown(index)`: Moves a task down in the list if it's not already at the bottom.

## Usage

1. **Clone the repository**:
    ```sh
    git clone https://github.com/yourusername/todo-list-app.git
    cd todo-list-app
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Start the app**:
    ```sh
    npm start
    ```

4. **Open your browser** and navigate to `http://localhost:3000` to see the app in action.
