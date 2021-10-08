import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTodo } from "../Redux/action.js";
import { Link } from "react-router-dom";

export const EditTodo = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo);

  const [data, setData] = useState("");

  const { id } = useParams();
  console.log(id);
  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleEdit = () => {
    dispatch(editTodo({ data, id }));
  };

  return (
    <div>
      <h2>Edit Todo</h2>
      <input onChange={handleChange} type="text" placeholder="Enter Todo" />
      <Link to="/">
        <button onClick={handleEdit}>Edit</button>
      </Link>

      {todo.map((el) => {
        return (
          <div key={el.id}>
            {el.title}-{el.id}
          </div>
        );
      })}
    </div>
  );
};
