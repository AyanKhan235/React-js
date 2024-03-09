import React ,{useState,useContext}from 'react'
import UserContext from '../context/UserContext'

export default function Login() {
    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')
    // console.log('userContext', UserContext);
   
   const {setUser} = useContext(UserContext)
  const handleSubmit=(e)=>{ 
    e.preventDefault();
    setUser({username,password});
    
  }
  return (
    <div>
        <h2>Login</h2>
        <input type="text"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder="username" />
        {"    "}

        <input type="text"
         onChange={(e)=>setPassword(e.target.value)}
         value={password}
        placeholder="password" />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
