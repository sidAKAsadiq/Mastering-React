import React, { useState } from "react";
import { useTodo } from "../contexts/todo_context";

function Todo_item({ todo }) {
  console.log( "content : ",todo.content)
  const [updated_content , set_updated_content] = useState(todo.content)
  const [are_we_updating_todo , set_are_we_updating_todo] = useState(false)

  const {delete_todo , update_todo , toggle_todo_completion} = useTodo()

  




  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.is_completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.is_completed}
        onChange={() => toggle_todo_completion(todo.id)}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          are_we_updating_todo ? "border-black/10 px-2" : "border-transparent"
        } ${todo.is_completed ? "line-through" : ""}`}
        value={updated_content}
        onChange={(e) => set_updated_content(e.target.value)}
        readOnly={!are_we_updating_todo}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (are_we_updating_todo) {
            update_todo(todo.id , updated_content)
            set_are_we_updating_todo((prev) => !prev) 
            //editTodo();
          } 
          else{
            set_are_we_updating_todo((prev) => !prev)
          } 
        }}
        disabled={todo.is_completed}
      >
        {are_we_updating_todo ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => delete_todo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default Todo_item;
