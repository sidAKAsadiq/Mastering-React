import { createSlice , nanoid } from "@reduxjs/toolkit";

const initial_state = {
    todos : [{content : "Todo content" , id: 1}]
}

export const todo_slice = createSlice({
    name : "todo_slice",
    initialState : initial_state,
    reducers : {
        add_todo : (state , action) => {
            const todo = {
                id : nanoid(),
                content : action.payload
            }
            state.todos.push(todo)
        },
        delete_todo : (state , action) => {
            const filtered_todos = state.todos.filter((each_todo) => each_todo.id!==action.payload)
            state.todos = filtered_todos
        },
        update_todo : (state , action) => {
            console.log(action.payload.id)
            console.log(action.payload.updated_content)
            console.log(action.payload)
            const updated_todo = {
                id : action.payload.id,
                content : action.payload.updated_content
            }
            state.todos = state.todos.map((each_todo) => each_todo.id === action.payload.id ?  updated_todo : each_todo)
        }
    }
})

export const {add_todo , delete_todo , update_todo} = todo_slice.actions

export default todo_slice.reducer