import { createSlice } from "@reduxjs/toolkit";
import { addTodoAction, getTodosAction } from "./actions/todoAction";
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
    fetchTodos: ({ todos }, action) => {},
  },
  extraReducers: {
    [getTodosAction.pending]: (state, action) => {
      console.log("pending list", action);
    },
    [getTodosAction.fulfilled]: (state, action) => {
      console.log("fulfilled list", action);
    },
    [getTodosAction.rejected]: (state, action) => {
      console.log("rejected list", action);
    },
    [addTodoAction.pending]: (state, action) => {
      console.log("pending", action);
      state.loading = true;
    },
    [addTodoAction.fulfilled]: (state, action) => {
      console.log("fulfilled", action);
      state.todos = action.payload;
      state.loading = false;
    },
    [addTodoAction.rejected]: (state, action) => {
      console.log("rejected", action);
      state.loading = false;
    },
  },
});
// Action creators are generated for each case reducer function
export const { addTodo, removeTodo } = todosReducer.actions;

export default todosReducer.reducer;
