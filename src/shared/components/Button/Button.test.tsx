import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('renders button text correctly', () => {
    render(<Button>Create Task</Button>)
    expect(screen.getByText('Create Task')).toBeInTheDocument()
  })
})
