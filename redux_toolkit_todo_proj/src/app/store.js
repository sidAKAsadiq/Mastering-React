import {configureStore} from '@reduxjs/toolkit'
import todo_reducer from '../features/todo/todo_slice.js'

export const my_store = configureStore({
    reducer : todo_reducer
})