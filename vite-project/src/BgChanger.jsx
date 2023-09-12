import  { useState } from 'react'


function BgChanger() {

  const [color, setColor] = useState("purple");

  return (
    <div className="w-full h-screen duration-200 " style={{backgroundColor: color}}>
    <div className="fixed justify-center bottom-12 inset-x-0 px-2 flex flex-wrap">
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
    <button 
    onClick={() => setColor("red")}
    className="rounded-full outline-none px-4 py-1 text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
    <button
    onClick={() => setColor("green")}
     className="rounded-full outline-none px-4 py-1 text-white shadow-lg" style={{backgroundColor: "green"}}>green</button>
    <button onClick={() => setColor("yellow")}
    className="rounded-full outline-none px-4 py-1 text-white shadow-lg" style={{backgroundColor: "yellow"}}>yellow</button>
    <button 
    onClick={() => setColor("blue")}
    className="rounded-full outline-none px-4 py-1 text-white shadow-lg" style={{backgroundColor: "blue"}}>blue</button>
    <button 
    onClick={() => setColor("black")}
    className="rounded-full outline-none px-4 py-1 text-white shadow-lg" style={{backgroundColor: "black"}}>black </button>

    </div>

    </div>
    </div>
  )
}

export default BgChanger