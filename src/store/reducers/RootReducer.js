import { combineReducers } from '@reduxjs/toolkit';

import todosSlice from './todos/todosSlice';

const rootReducer = combineReducers({
  todosStore: todosSlice,
});

export default rootReducer;
