type ButtonProps = {
  children: React.ReactNode
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="rounded-lg bg-blue-600 px-4 py-2 font-medium transition hover:bg-blue-500">
      {children}
    </button>
  )
}

export default Button
