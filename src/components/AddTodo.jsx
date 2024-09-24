import { useState } from "react"
import { useDispatch } from "react-redux"
import {addTodo} from "../feature/todo/todoSlice"
import "../components/AddTodo.css"


function AddTodo() {

    const [input,setInput] = useState('')

    //dispatch reducer ko use krty ue store ma value ko change krta ha
    const dispatch = useDispatch()

    const handleForm = (e)=>{
        e.preventDefault()
        if (input.trim() === '') {
          alert("Please enter a todo!");
          return;
        }
        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <>
   <div className="main">
   <h1>Add Todo</h1>
    <form className="form" onSubmit={handleForm}>
        <input className="input" type="text" placeholder="Add Todo" value={input} onChange={(e)=> setInput(e.target.value)}/>
        <br />
        <button  className="btn" type="submit" disabled={!input.trim()}>Add</button>
    </form>
   </div>
    </>
  )
}

export default AddTodo
