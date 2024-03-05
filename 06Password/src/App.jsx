import { useState, useCallback , useEffect, useRef} from 'react'


function App() {
  const [length,setLength] = useState(8)
  const [numberAllowed, setNumberAllowed]=useState(false);
  const [charAllowed, setCharAllowed]=useState(false);
  const [Password, setPassword]=useState("");

  const passwordRef=useRef(null)   


  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789";
    if(charAllowed) str+="~!@#$%^&*+-=(){}\/><;:"
    // ref Hook
    
    
    
    for(let i=1; i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    
    setPassword(pass)
    
  },[length,numberAllowed,charAllowed, setPassword]) // optimize purpose only setpassword
  
   const copyPasswordToClipborad=useCallback(()=>{
      passwordRef.current?.select()
      // passwordRef.current?.setSelectionRange(0,4)  // it will select only 5 value in password
      window.navigator.clipboard.writeText(Password)
   }, [Password])

  useEffect(()=>{
    passwordGenerator()
  },[length, numberAllowed, charAllowed, passwordGenerator])

   
  return (
    <>
      <div className=" w-full text-center  max-w-md mx-auto shadow-md rounded-lg px-4  py-3 my-8 text-black bg-gray-800">
        <h1 className="text-white text-center">password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mx-4">
        <input type="text" 
        value={Password}
        className="outline-none w-full py-1  px-3"
        placeholder='password'
        readOnly
        ref={passwordRef}
        />
        <button 
        onClick={copyPasswordToClipborad}
        className="bg-blue-700  
        outline-none px-2 py-2 shrink-0 "
        >Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="item-center flex gap-x-1">
        <input type="range" 
        min={6}
        max={100}
        value={length}
        className="cursor-pointer"
        onChange={(e)=>{
          setLength(e.target.value)
        }}

        />
        <label className="text-white" > Length {length}</label>
        </div>
        <div className="flex item-center gap-x-1">
          <input type="checkbox"
            defaultcheckbox={numberAllowed}
            id="numberInput"
            onChange={()=>{
              setNumberAllowed((prev)=> !prev)
            }}
          />
         <label htmlFor="numberInput" className="text-white" >Numbers</label>

        </div>
        <div className="flex item-center gap-x-1">
          <input type="checkbox"
            defaultcheckbox={charAllowed}
            id="charInput"
            onChange={()=>{
              setCharAllowed((prev)=> !prev)
            }}
          />
         <label htmlFor="charInput" className="text-white" >Character</label>

        </div>
       

      </div>
      </div>
    </>
  )
}

export default App
