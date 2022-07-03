import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addTodoSupa,
  deleteTodoSupa,
  getTodosSupa,
  updateTodoSupa,
} from "../../utils/supabase";

export const getTodosAction = createAsyncThunk("todos", async () => {
  return await getTodosSupa();
});

export const addTodoAction = createAsyncThunk("todos", async (title) => {
  return await addTodoSupa(title);
});

