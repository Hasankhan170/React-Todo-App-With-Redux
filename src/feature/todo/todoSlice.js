import { createSlice , nanoid } from "@reduxjs/toolkit";

// state: Redux store ka current state.
// action: Wo action jo dispatch kiya gaya hai, jisme data hota hai jo state ko update karne ke liye zaroori hai.



export const todoSlice = createSlice ({
    name : 'Todos',
    initialState : {
        todos : []
    },
    reducers : {
        addTodo : (state,action)=>{
            state.todos.push({
                text : action.payload,
                id : nanoid(),
            })
        },
        removeTodo : (state,action)=>{
            // filter() method array ko filter karta hai aur un todos ko return karta hai jinka id action ke payload ke equal nahi hai.
            state.todos = state.todos.filter(todo=> todo.id!== action.payload)
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer