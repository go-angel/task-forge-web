import Button from '@/shared/components/Button/Button'
import { useState } from 'react'
import { addTask } from '../../store/taskSlice'
import { useAppDispatch } from '@/hooks/redux'

const TaskForm = () => {
  const dispatch = useAppDispatch()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!title.trim()) return
    dispatch(addTask({ title, description }))

    setTitle('')
    setDescription('')
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-xl border border-slate-800 bg-slate-900 p-6"
    >
      <div>
        <label htmlFor="title" className="mb-1 block text-sm font-medium">
          Title
        </label>
        <input
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="description" className="mb-1 block text-sm font-medium">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 outline-none focus:border-blue-500"
        />
      </div>
      <Button>Create Task</Button>
    </form>
  )
}

export default TaskForm
