import { useState } from 'react'
import './App.css'
import Card from './components/card'
let myObj = {
  username: "suraj",
  age: 24
}
  
function App() {


  return (
    <>
      <h1 className='bg-blue-400 text-black p-6 rounded-xl mb-4'>Tailwindcss test</h1> 
      <Card username=" i am happy soul" someObje={myObj}    />
      <Card/>
    </> 
  )
}

export default App
