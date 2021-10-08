import React from "react";
import { addTodo } from "../Redux/action.js";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

export const Todo = () => {
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo);

  const handleChange = (e) => {
    setData(e.target.value);
  };

  return (
    <div>
      <h1>Todo's</h1>
      <input onChange={handleChange} type="text" placeholder="Enter Todo's" />
      <button
        onClick={() => {
          dispatch(addTodo(data));
        }}
      >
        Add Todo
      </button>
    </div>
  );
};
