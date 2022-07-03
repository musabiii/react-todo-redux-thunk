import { createSlice } from "@reduxjs/toolkit";
import { addTodoAction, deleteTodoAction, getTodosAction } from "./actions/todoAction";
export const todosReducer = createSlice({
  name: "todos",
  initialState: {
    value: 0,
    todos: [{ id: 1, title: "first", done: false }],
    loading: false,
    loadingList:false,
    loadingDelete:null
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
  // extraReducers: (bulder) => {
  //   console.log("getTodosAction.pending",getTodosAction.pending)
  //   console.log("addTodoAction.pending",getTodosAction.pending)
  // },
  extraReducers: {
    [getTodosAction.pending]: (state, action) => {
      console.log("pending list", action);
      state.loadingList = true;
    },
    [getTodosAction.fulfilled]: (state, action) => {
      console.log("fulfilled list", action);
      state.todos = action.payload;
      state.loadingList = false;
    },
    [getTodosAction.rejected]: (state, action) => {
      console.log("rejected list", action);
      state.loadingList = false;
    },
    [addTodoAction.pending]: (state, action) => {
      console.log("pending add", action);
      state.loading = true;
    },
    [addTodoAction.fulfilled]: (state, action) => {
      console.log("fulfilled add", action);
      state.loading = false;
    },
    [addTodoAction.rejected]: (state, action) => {
      console.log("rejected add", action);
      state.loading = false;
    },
    [deleteTodoAction.pending]: (state, action) => {
      console.log("pending delete", action);
    },
    [deleteTodoAction.fulfilled]: (state, action) => {
      console.log("fulfilled delete", action);
    },
    [deleteTodoAction.rejected]: (state, action) => {
      console.log("rejected delete", action);
    },
  },
});
// Action creators are generated for each case reducer function
export const { addTodo, removeTodo } = todosReducer.actions;

export default todosReducer.reducer;
