import { createSlice, nanoid, type PayloadAction } from '@reduxjs/toolkit'
import type { Task, TasksState } from '../types/task.types'

type AddTaskPayload = {
  title: string
  description: string
}
const initialState: TasksState = {
  tasks: [],
}
const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<AddTaskPayload>) => {
      const newTask: Task = {
        id: nanoid(),
        title: action.payload.title,
        description: action.payload.description,
        completed: false,
        createdAt: new Date().toISOString(),
      }
      //This is not a mutation because of the use of Immer in createSlice
      state.tasks.push(newTask)
    },
    toggleTaskCompletion: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((task) => task.id === action.payload)
      if (task) {
        //This is not a mutation because of the use of Immer in createSlice
        task.completed = !task.completed
      }
    },
  },
})
export const { addTask, toggleTaskCompletion } = taskSlice.actions
export default taskSlice.reducer
