import React, { useState, useEffect } from "react";
import Headers from "../../Todo-List/src/components/Headers";
import Form from "../../Todo-List/src/components/Form";
import "./App.css";
import ToDoLists from "../../Todo-List/src/components/ToDoLists";

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([initialState]);
  const [editTodo, seteditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Headers />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            seteditTodo={seteditTodo}
          />
        </div>
        <div>
          <ToDoLists
            todos={todos}
            setTodos={setTodos}
            seteditTodo={seteditTodo}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
