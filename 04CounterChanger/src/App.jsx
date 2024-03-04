import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(15)
  function addValue() {
    setCount(count+1)
    setCount(count+1)
    setCount(count+1)
    setCount(count+1)
    //  it will only reflect +1 it will not add +4 value becouse of ye batch bnega or jayega for chnaging in ui to ye pura ek jesa maana jayega isliye pura last wala setter execute hoga 
    

    setCount(prevCount=>prevCount+1)
    setCount(prevCount=>prevCount+1)
    setCount(prevCount=>prevCount+1)
    setCount(prevCount=>prevCount+1)
    // isme batch ni bnega q ki call back pura hone ke baad hi dusra exeucte hoga to yha +4 value change hogi 
    // prevcount tab aayega dusre wale ke pass jab pehla wala completed hoga 

    

  }
  function removeValue() {
    setCount(count-1)
  }
  return (
    <>
     <h1>Chai aur code</h1>
     <h3>Counter chnager</h3>
     <button onClick={addValue}>add Value {count}</button>
     <br />
     <button onClick={removeValue}>remove value {count}</button>
    </>
  )
}

export default App
