export type Task = {
  id: string
  title: string
  description: string
  completed: boolean
  createdAt: string
}

export type TasksState = {
  tasks: Task[]
}
