import { useState } from "react"
import { useDispatch } from "react-redux"
import {addTodo} from "../feature/todo/todoSlice"


function AddTodo() {

    const [input,setInput] = useState('')

    //dispatch reducer ko use krty ue store ma value ko change krta ha
    const dispatch = useDispatch()

    const handleForm = (e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <>
    <h1>Add Todo</h1>

    <form onSubmit={handleForm}>
        <input type="text" placeholder="Add Todo" value={input} onChange={(e)=> setInput(e.target.value)}/>
        <button type="submit">Add</button>
    </form>
    </>
  )
}

export default AddTodo
