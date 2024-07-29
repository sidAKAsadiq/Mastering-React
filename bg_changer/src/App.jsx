import { useState } from "react"

function App() {
  const [color, set_color] = useState("black")

  return (  
    <>
      <div className="w-full h-screen" 
      style={{backgroundColor:  color }}
      ></div>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2  " >

        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl" >
          
            <button
             onClick={() => {set_color("red")}}
             className="rounded-full outline-none px-4 py-1 text-black shadow-lg" style={{backgroundColor : "red"}}  >Red</button>

            <button
            onClick={() => {set_color("blue")}}
            className="rounded-full outline-none px-4 py-1 text-black shadow-lg" style={{backgroundColor : "blue"}}  >blue</button>

            <button 
            onClick={() => {set_color("green")}}
            className="rounded-full outline-none px-4 py-1 text-black shadow-lg" style={{backgroundColor : "green"}}  >green</button>

            <button 
            onClick={() => {set_color("purple")}}
            className="rounded-full outline-none px-4 py-1 text-black shadow-lg" style={{backgroundColor : "purple"}}  >purple</button>

            <button 
            onClick={() => {set_color("yellow")}}className="rounded-full outline-none px-4 py-1 text-black shadow-lg" style={{backgroundColor : "yellow"}} >yellow</button>


        </div>




      </div>

    </>
  )
}

export default App
