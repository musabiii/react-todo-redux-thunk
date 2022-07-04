import { createSlice } from "@reduxjs/toolkit";
import { addTodoAction, deleteTodoAction, getTodosAction, updateTodoAction } from "./actions/todoAction";
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
      const index = todos.findIndex((el) => el.id === action.payload);
      todos.splice(index, 1);
    },
    fetchTodos: ({ todos }, action) => {},
  },
  extraReducers: {
    [getTodosAction.pending]: (state, action) => {
      state.loadingList = true;
    },
    [getTodosAction.fulfilled]: (state, action) => {
      state.todos = action.payload;
      state.loadingList = false;
    },
    [getTodosAction.rejected]: (state, action) => {
      state.loadingList = false;
    },
    [addTodoAction.pending]: (state, action) => {
      state.loading = true;
    },
    [addTodoAction.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [addTodoAction.rejected]: (state, action) => {
      state.loading = false;
    },
    [deleteTodoAction.pending]: (state, action,...args) => {
      // state.loadingDelete = true;
      state.loadingDelete = action.meta.arg;
    },
    [deleteTodoAction.fulfilled]: (state, action) => {
      // state.loadingDelete = false;
      state.loadingDelete = null;
      state.todos = state.todos.filter(el=>el.id !== action.meta.arg)
    },
    [deleteTodoAction.rejected]: (state, action) => {
      state.loadingDelete = null;
    },
    [updateTodoAction.pending]: (state, action) => {
      //change done flag before api
      const item = state.todos.find(el=>el.id===action.meta.arg.id);
      item.done = !item.done;
    },
    [updateTodoAction.rejected]: (state, action) => {
      //if something go wrong we return done value
      const item = state.todos.find(el=>el.id===action.meta.arg.id);
      item.done = !item.done;
    },
  },
});
// Action creators are generated for each case reducer function
export const { addTodo, removeTodo } = todosReducer.actions;

export default todosReducer.reducer;
