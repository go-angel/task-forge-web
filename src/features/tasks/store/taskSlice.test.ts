import taskReducer, { addTask, toggleTaskCompletion } from './taskSlice'
describe('taskSlice', () => {
  it('should add new task', () => {
    const initialState = {
      tasks: [],
    }
    const newState = taskReducer(
      initialState,
      addTask({ title: 'First Task', description: 'First Task Description' })
    )
    expect(newState.tasks).toHaveLength(1)
    expect(newState.tasks[0].title).toBe('First Task')
  })
  it('should toggle task completion', () => {
    const initialState = {
      tasks: [
        {
          id: '1',
          title: 'Task',
          description: 'Description',
          completed: false,
          createdAt: new Date().toISOString(),
        },
      ],
    }
    const newState = taskReducer(initialState, toggleTaskCompletion('1'))
    expect(newState.tasks[0].completed).toBe(true)
  })
})
