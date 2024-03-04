import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"Ayan",
    age:21
  } 
  let anotherObjec={
   ayan:"is a khan"
  }
  return (
    <>
     <h1 className="bg-green-400  text-black p-9 rounded-md mb-4">TailWind Css</h1>
      <Card username="chaiAurcode" btnText="Click me"/>
      <Card username="AYANKHAN" btnText="Visit me" />
    </>
  )
}

export default App
