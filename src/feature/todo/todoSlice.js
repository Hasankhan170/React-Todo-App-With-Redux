import { createSlice , nanoid, nonoid } from "@reduxjs/toolkit";

// export const todoSlice =({
//     name : 'todo',
//     initialState : {
//         todo : []
//     },
//     reducers : {
//         addTodo : (state,action)=>{}
//     }
// })

const initialState = {
    todos : [{id :1 , text : 'HeLLO WORLD'}]
}

export const todoSlice = createSlice ({
    name : 'todo',
    initialState,
    reducers : {
        addTodo : (state,action)=>{
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        }
        // removeTodo : (state,action)=>{}
    }
})

export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer