import React from "react";
import Todo from "./Todo";
import "./Todos.css";
const Todoes = ({ todos, onRemoveBtn }) => {
  return (
    <div>
      <section className="todos">
        {todos.map((todo) => (
          <Todo
            todo={todo.todo}
            key={todo.id}
            id={todo.id}
            onRemoveBtn={onRemoveBtn}
          ></Todo>
        ))}
      </section>
    </div>
  );
};

export default Todoes;
