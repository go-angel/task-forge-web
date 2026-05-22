import type { RootState } from '@/store/store'

export const selectTasks = (state: RootState) => state.tasks.tasks
