import React, { useState } from "react";
import "./NewTodo.css";
const NewTodo = ({ onNewTodo }) => {
  const [todo, setTodo] = useState({ tittle: "", description: "" });
  const { tittle, description } = todo;
  const handleChange = (e) => {
    const name = e.target.name;
    setTodo((oldTodo) => {
      return { ...oldTodo, [name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onNewTodo(todo);
    setTodo({ tittle: "", description: "" });
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-field">
          <level htmlFor="tittle">Tittle:</level>
          <input
            type="text"
            name="tittle"
            value={tittle}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <level htmlFor="description">Description:</level>
          <textarea
            name="description"
            type="text"
            value={description}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add todo</button>
      </form>
    </div>
  );
};

export default NewTodo;
