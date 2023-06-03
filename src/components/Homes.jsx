import React, { useState } from "react";
import Todoes from "./Todoes";
import "./Homes.css";
import NewTodo from "./NewTodo";
import { v4 as uuidv4 } from "uuid";
const Homes = () => {
  const [todos, setTodos] = useState([]);
  const handleAddTodos = (todo) => {
    setTodos((preTodo) => {
      return [...preTodo, { id: uuidv4(), todo }];
    });
  };

  const handleRemoveTodo = (id) => {
    setTodos((preTodo) => {
      const filtteredTodo = preTodo.filter((todo) => todo.id !== id);
      // console.log(filtteredTodo);
      return filtteredTodo;
    });
  };
  return (
    <div className="container">
      <h1 style={{ color: "white" }}>Todo App</h1>
      <NewTodo onNewTodo={handleAddTodos}></NewTodo>
      <Todoes todos={todos} onRemoveBtn={handleRemoveTodo}></Todoes>
    </div>
  );
};

export default Homes;
