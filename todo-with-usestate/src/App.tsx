import  { useState } from "react"
import './index.css'



const Home = () => {
  const [todos, setTodos] = useState<string[]>([])
  const [inputValue , setInputValues] = useState<string>('')

  const handleChange = (e : any) => {
    setInputValues(e.target.value)
  }

  const handleSubmit = (e : any) => {
     e.preventDefault()
     setTodos([...todos, inputValue])
     setInputValues('')
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center my-6 text-blue-600">Todo App</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md flex gap-2 mb-6">
        <input
          type="text"
          value={inputValue}
          placeholder="Enter Your Todos..."
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
        >
          Add
        </button>
      </form>
      <ul className="w-full max-w-md bg-white shadow-lg rounded-lg p-4">
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <li
              key={index}
              className="p-2 border-b last:border-b-0 text-gray-700"
            >
              ✅ {todo}
            </li>
          ))
        ) : (
          <p className="text-center text-gray-500">No todos added yet.</p>
        )}
      </ul>
    </div>
  )
}

export default Home
