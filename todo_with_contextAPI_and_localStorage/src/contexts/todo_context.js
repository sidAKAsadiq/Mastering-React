import React, { createContext, useContext } from 'react'

export const todo_context = createContext({
    todos:[  //Array of todo objects
        {           
            id : 1,
            content : "Todo content",
            is_completed : false,
        }
    ],
    add_todo : (content)=>{},          //functionalities
    delete_todo : (id)=>{},
    update_todo : (id , content)=>{},
    toggle_todo_completion : (id)=>{},
})

export const Todo_provider = todo_context.Provider

//custom hook
export const useTodo = () => {
    return useContext(todo_context)
}