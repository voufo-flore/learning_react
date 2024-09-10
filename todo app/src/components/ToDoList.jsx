import React, { useState } from "react";

function ToDoLists() {
  const [tasks, setTasks] = useState([
    "eat breakfast",
    "take a shower",
    "watch movies",
  ]);
  const [newTask, setnewTask] = useState("");

  function HandleInputChange(event) {
    setnewTask(event.target.value);
  }

  function addTasks() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setnewTask("");
    }
  }

  function deleteTask(index) {
      setTasks(tasks.filter((_, i) => i !== index));
    setnewTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      ([updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
      ]),
        updatedTasks[index];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      ([updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
      ]),
        updatedTasks[index];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-lists">
      <h1> To-Do-List</h1>
      <div>
        <input
          type="text"
          placeholder="enter a Task..."
          value={newTask}
          onChange={HandleInputChange}
        />
        <button className="add-button" onClick={addTasks}>
          add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              👆
            </button>
            <button
              className="delete-button"
              onClick={() => moveTaskDown(index)}
            >
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoLists;
