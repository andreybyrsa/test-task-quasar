import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [
      {id: 1, todo: 'Create Element', trackedTime: 0, state: false},
      {id: 2, todo: 'Create Element', trackedTime: 0, state: false},
      {id: 3, todo: 'Create Element', trackedTime: 0, state: false},
    ]
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    }
  }
});

export default todosSlice.reducer;
export const { addTodo } = todosSlice.actions;
