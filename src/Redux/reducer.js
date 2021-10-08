import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  EDIT_TODO,
} from "./actionTypes.js";

export const reducer = (store, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...store,
        todo: [...store.todo, { ...payload }],
      };
    case DELETE_TODO:
      return {
        ...store,
        todo: [
          ...store.todo.filter((e) => {
            return e.id !== payload.id;
          }),
        ],
      };
    case TOGGLE_TODO:
      return {
        ...store,
        todo: [
          ...store.todo.map((el) => {
            return el.id === payload.id ? { ...el, status: !el.status } : el;
          }),
        ],
      };
    case EDIT_TODO:
      console.log(payload);
      return {
        ...store,
        todo: [
          ...store.todo.map((el) => {
            return el.id === payload.id ? { ...el, title: payload.title } : el;
          }),
        ],
      };
    default:
      return { ...store };
  }
};
