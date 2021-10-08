import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../Redux/action";
import { Link } from "react-router-dom";

export const TodoList = () => {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div>
      {todo.map((e) => {
        return (
          <div key={e.id}>
            <span>{e.title}</span>
            <br />
            <span>{e.status ? "Done" : "Not Done"}</span>
            <br />
            <button
              onClick={() => {
                handleDelete(e.id);
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                handleToggle(e.id);
              }}
            >
              Toggle
            </button>
            <Link to={`/edit/${e.id}`}>
              <button>Edit</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
