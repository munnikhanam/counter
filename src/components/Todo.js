import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Todo.css";
const Todo = ({ todo, id, onRemoveBtn }) => {
  const { tittle, description } = todo;
  const handleDelete = (id) => {
    onRemoveBtn(id);
  };
  return (
    <article className="todo">
      <div>
        <h1>{tittle}</h1>
        <p>{description}</p>
      </div>
      <div>
        <button className="btn" onClick={() => handleDelete(id)}>
          <FontAwesomeIcon icon={faTrash} className="trash" />
        </button>
      </div>
    </article>
  );
};

export default Todo;
