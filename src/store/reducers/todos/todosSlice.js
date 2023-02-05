import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload)
    },
    removeTodo(state, action) {
      state.todos.splice(action.payload, 1)
    },
    setState(state, action) {
      state.todos[action.payload].state = !state.todos[action.payload].state
    },
    setTime(state, action) {
      state.todos[action.payload - 1].trackedTime = localStorage.getItem(action.payload)
    },
  },
})

export default todosSlice.reducer
export const { addTodo, removeTodo, setState, setTime } = todosSlice.actions
