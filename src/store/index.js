import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todosReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export default configureStore(
  {
    reducer: { todos: todosReducer },
  },
  composeWithDevTools()
);
