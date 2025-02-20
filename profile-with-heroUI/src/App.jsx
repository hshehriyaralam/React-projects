import React from 'react'
import CardComponnets from './Components/Card'
import Modal from "./Components/Modal"

const App = () => {
  return (
    <div  className='flex flex-col items-center justify-center w-full h-screen ' >
    <CardComponnets />
    <Modal />
    </div>
  )
}

export default App
