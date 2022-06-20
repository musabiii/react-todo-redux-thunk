import { createSlice } from '@reduxjs/toolkit'

export const todosReducer = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    todos:[
      "Racing car sprays burning fuel into crowd.",
      "Japanese princess to wed commoner.",
      "Australian walks 100km after outback crash.",
      "Man charged over missing wedding girl.",
      "Los Angeles battles huge wildfires.",
    ]
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    addTodo:({todos})=>{
      // console.log("action",action)
        todos.push('somenew')
    }
  },
})
console.log("todosReducer",todosReducer)
// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,addTodo } = todosReducer.actions

export default todosReducer.reducer