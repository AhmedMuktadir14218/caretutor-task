// src/redux/tasksSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('tasks')) || [] : [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    editTask: (state, action) => {
      const { index, updatedTask } = action.payload;
      state.tasks[index] = updatedTask;
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    removeTask: (state, action) => {
      state.tasks.splice(action.payload, 1);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
  },
});

export const { addTask, editTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
