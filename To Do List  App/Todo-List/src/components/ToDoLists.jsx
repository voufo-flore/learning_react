import React from "react";
import checked from "../assets/checked.png"
import deleteIcon from "../assets/delete.png"
import task from "../assets/task-completed.png"

const ToDoLists = ({ todos, setTodos, seteditTodo }) => {
  const handlecomplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    seteditTodo(findTodo);
  };
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button
          
              className="button-complete task-button"
              onClick={() => handlecomplete(todo)}
              
              
            >
            <img src={checked} alt="nothing" />
            </button>

            <button
              className="button-edit task-button"
              onClick={() => handleEdit(todo)}
            >
            <img src={task} alt="nothing" />
            </button>

            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todo)}
            >
              <img src={deleteIcon} alt="nothing" />
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default ToDoLists;
