import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import TaskForm from './TaskForm'
import { Provider } from 'react-redux'
import { store } from '@/store/store'

describe('TaskForm', () => {
  it('should render component', () => {
    render(
      <Provider store={store}>
        <TaskForm />
      </Provider>
    )
    const label = screen.getByText('Title')
    expect(label).toHaveTextContent('Title')
  })
  it('creates a new task', async () => {
    const user = userEvent.setup()
    render(
      <Provider store={store}>
        <TaskForm />
      </Provider>
    )
    const input = screen.getByRole('textbox', { name: /title/i })
    await user.type(input, 'New Task')
    const button = screen.getByRole('button', {
      name: /create task/i,
    })
    await user.click(button)
    expect(store.getState().tasks.tasks).toHaveLength(1)
  })
})
