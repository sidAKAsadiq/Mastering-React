import { useState } from "react";

function Test(){
const [color , set_color] = useState("blue")

return(
<>
<div className="w-full h-screen" style={{backgroundColor : color}} >    
</div>

{/* flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl  */}

<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2  " >

<div class="flex flex-col justify-center space-y-2 md:flex-row md:space-x-2 md:space-y-0">
  <button
    onClick={() => {set_color("black")}}
    type="button"
    class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
  >
    Button text
  </button>
  <button
  onClick={() => {set_color("yellow")}}
    type="button"
    class="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
  >
    Button text
  </button>
  <button
    type="button"
    onClick={() => {set_color("red")}}
    class="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
  >
    Button text
  </button>
  <button
  onClick={() => {set_color("green")}}
    type="button"
    class="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
  >
    Button text
  </button>
</div>
</div>




</>
)
}

export default Test