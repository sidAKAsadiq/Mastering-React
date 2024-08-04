import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { delete_todo, update_todo } from "../features/todo/todo_slice";

export default function Todos() {
  const [updated_content, set_updated_content] = useState("");
  //const [is_being_updated, set_is_being_updated] = useState(false);
  const [todo_being_edited_id , set_todo_being_edited_id] = useState("1")
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(todos);

  return (
    <>
    {todos.map((each_todo) => (
    <div key={each_todo.id}>
                  <input
                 
                  type="text"
                  className={`border outline-none w-full bg-transparent rounded-lg ${
                    todo_being_edited_id === each_todo.id ? "border-black/10 px-2" : "border-transparent"
                  }`}
                  value={ todo_being_edited_id !== each_todo.id ? each_todo.content : updated_content}
                  onChange={(e) => set_updated_content(e.target.value)}
                  readOnly={todo_being_edited_id !== each_todo.id}
                />
                <button
                onClick={() => dispatch(delete_todo(each_todo.id))}
                >
                    Delete
                </button>
                <br />
                <button
                type="submit"
                onClick={() => {
                    if(todo_being_edited_id === each_todo.id){
                        dispatch(update_todo({id : each_todo.id , updated_content}))
                        set_todo_being_edited_id("1")
                        set_updated_content("")
                    }
                    else{
                        set_updated_content(each_todo.content)
                        set_todo_being_edited_id(each_todo.id)
                    }
                }}
                >
                    {todo_being_edited_id === each_todo.id ? "📁" : "✏️"}
                </button>        
        </div>
            ))}
    </>
  );
}
