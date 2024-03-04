import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter , setCounter]=useState(15)
  
  const addvalue=()=>{
    if(counter<20){
      
      counter=counter+1
      setCounter(counter)
    }
  }
 
    const remove=()=>{
      if(counter>0){
        counter=counter-1
        setCounter(counter)
      }
     
    }
  
  

  return (
    <>
     <h2>Chai aur React {counter}</h2>
     <h3>Counter chnager{counter} </h3>
     <button onClick={addvalue}>Add Value {counter}</button>
     <button onClick={remove}>remove value {counter}</button>
     

    </>
  )
}

export default App
