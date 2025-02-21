import React, { useReducer, useState } from 'react'
import Card from './Card'

const InitialValue = []
const reducer = (state, action) => {
      switch (action.type) {
        case "addTodo":
          return[...state, action.payload]
        default:
          state
      }
}
const Form = () => {
  const [state, dispatch] = useReducer(reducer, InitialValue)
  const [input, setInput] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch({
      type :"addTodo",
      payload : input
    },
    setInput('')
  )
  }
  return (
    <div>
        <form>
        <input type="text" placeholder='Enter your todo' value={input} onChange={(e) => setInput(e.target.value) } />
        <button  onClick={handleSubmit}  className='p-1 rounded  bg-blue-800 text-white' >add Todo</button>
      </form>
  {
    state?.map((todo, index) => (
      <ul  key={index} >
        <p>Todos : {todo}</p>
      </ul>
    ))
  }
    </div>
  )
}

export default Form
