import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 px-6 py-4">
        <h1 className="text-2xl font-bold">Task Forge</h1>
      </header>
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
