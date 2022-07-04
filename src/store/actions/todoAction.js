import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addTodoSupa,
  deleteTodoSupa,
  getTodosSupa,
  updateTodoSupa,
} from "../../utils/supabase";

export const getTodosAction = createAsyncThunk("todos/getTodosAction", async () => {
  return await getTodosSupa();
});

export const addTodoAction = createAsyncThunk("todos/addTodoAction", async (title) => {
  return await addTodoSupa(title);
});

export const deleteTodoAction = createAsyncThunk("todos/deleteTodoAction", async (id) => {
  return await deleteTodoSupa(id);
});

export const updateTodoAction = createAsyncThunk("todos/updateTodoAction", async (todo) => {
  return await updateTodoSupa(todo);
});



