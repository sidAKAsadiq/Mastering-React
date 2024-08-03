import React, { useState } from "react";
import { useTodo } from "../contexts/todo_context";

function Todo_form() {
    const [content, set_content] = useState("")
    const {add_todo} = useTodo()

    const add = (e) => {
        e.preventDefault()
        console.log("taerget!", e.target.value)
        set_content(e.target.value)
        console.log("cont", content)
        add_todo(content)
        set_content("")
    }



  return (
    <form  onSubmit={add}  className="flex`">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={content}
        onChange={(e) => set_content(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
        //value={content}
       // onClick={add}
      >
        Add
      </button>
    </form>
  );
}

export default Todo_form;
