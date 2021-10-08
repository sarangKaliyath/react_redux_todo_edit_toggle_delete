import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  EDIT_TODO,
} from "./actionTypes.js";
import { nanoid } from "nanoid";

export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: { title: data, status: false, id: nanoid(4) },
  };
};

export const deleteTodo = (data) => {
  return {
    type: DELETE_TODO,
    payload: { id: data },
  };
};

export const toggleTodo = (data) => {
  return {
    type: TOGGLE_TODO,
    payload: { id: data },
  };
};

export const editTodo = ({ data, id }) => {
  return {
    type: EDIT_TODO,
    payload: { id: id, title: data },
  };
};
