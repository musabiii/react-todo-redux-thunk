import { createSlice } from "@reduxjs/toolkit";
import { getTodosAction } from "./actions/todoAction";
export const todosReducer = createSlice({
  name: "todos",
  initialState: {
    value: 0,
    todos: [{ id: 1, title: "first", done: false }],
    loading: false,
  },
  reducers: {
    addTodo: ({ todos }, action) => {
      if (!action.payload) return;
      todos.push({ id: +new Date(), title: action.payload, done: false });
    },
    removeTodo: ({ todos }, action) => {
      console.log("remove todo", action);
      const index = todos.findIndex((el) => el.id === action.payload);
      todos.splice(index, 1);
    },
  },
  extraReducers: {
    [getTodosAction.pending]: (state, action) => {
      console.log(action);
      state.loading = true;
    },
    [getTodosAction.fulfilled]: (state, action) => {
      console.log(action);
      state.loading = false;
    },
    [getTodosAction.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
// Action creators are generated for each case reducer function
export const { addTodo, removeTodo } = todosReducer.actions;

export default todosReducer.reducer;
