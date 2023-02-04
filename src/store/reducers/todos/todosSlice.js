import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: []
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    setState(state, action) {
      state.todos[action.payload].state = !state.todos[action.payload].state
    }
  }
});

export default todosSlice.reducer;
export const { addTodo, setState } = todosSlice.actions;
