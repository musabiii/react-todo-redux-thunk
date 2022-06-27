import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addTodoSupa,
  deleteTodoSupa,
  getTodos,
  updateTodoSupa,
} from "../../utils/supabase";

export const getTodosAction = createAsyncThunk("todos", async () => {
  return await getTodos();
});
