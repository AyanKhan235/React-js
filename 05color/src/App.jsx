import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive");

  console.log(color); // Add this line to check the value of color

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
     <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button onClick={()=>{setColor("red")}} className=" shadow-lg outline-none px-4 py-1 rounded-full" style={{backgroundColor:"red"}}>red</button>
        <button onClick={()=>{setColor("yellow")}} className="shadow-lg outline-none px-4 py-1 rounded-full" style={{backgroundColor:"yellow"}}>yellow</button>
        <button onClick={()=>{setColor("pink")}} className="shadow-lg outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"pink"}}>pink</button>
        <button onClick={()=>{setColor("blue")}} className="shadow-lg outline-none px-4 py-1 rounded-full" style={{backgroundColor:"blue"}}>blue</button>
        <button onClick={()=>{setColor("green")}} className="shadow-lg outline-none px-4 py-1 rounded-full" style={{backgroundColor:"green"}}>green</button>
        <button onClick={()=>{setColor("white")}} className="shadow-lg outline-none px-4 py-1 rounded-full" style={{backgroundColor:"white"}}>white</button>
        <button onClick={()=>{setColor("black")}} className="shadow-lg outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor:"black"}}>black</button>

      </div>
     </div>
    </div>
  );
}

export default App