import React from "react";
import { useState } from "react";
import "./App.css";

function ToDoList() {
  const [tasks, setTasks] = useState(["Eat Breakfast", "Attend lectures", "Buy Shades"]);
  const [tasksCheck, settasksCheck] = useState("");

  function addTask() {
    if (tasksCheck) {
      setTasks([...tasks, tasksCheck]);
      settasksCheck("");
    }
  }

  function removeTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function taskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function taskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="todo-container">
      <h2 className="todo-title">To-Do List</h2>
      <div className="task-input-container">
        <input
          type="text"
          id="Tasks"
          className="task-input"
          placeholder="Enter a new task"
          onChange={(e) => settasksCheck(e.target.value)}
          value={tasksCheck}
        />
        <button id="Add" className="add-task-button" onClick={addTask}>
          Add Task
        </button>
      </div>
      <ol className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <span className="task-text">{task}</span>
            <div className="task-buttons">
              <button className="remove" onClick={() => removeTask(index)}>
                Remove
              </button>
              <button className="move-button up" onClick={() => taskUp(index)}>
              ☝️
              </button>
              <button className="move-button down" onClick={() => taskDown(index)}>
              👇
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;