import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id:1,text:"Hello World"}]
}
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                text: action.payload,
                completed: false
            }
            state.todos.push(newTodo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo =>
                todo.id !== action.payload)
        },
        toggleComplete: (state, action) => {
            const index = state.todos.findIndex(todo => todo.id === action.payload)
            state.todos[index].completed = !state.todos[index].completed
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        }
    }
})


export const { actions, reducer } = todoSlice.actions

export default todoSlice.reducer
