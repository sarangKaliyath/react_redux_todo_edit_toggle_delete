import { createStore } from "redux";
import { reducer } from "./reducer.js";

const initialState = {
  todo: [],
};

export const store = createStore(reducer, initialState);
