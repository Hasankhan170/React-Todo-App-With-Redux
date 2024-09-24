import { useDispatch, useSelector } from "react-redux"
import {removeTodo} from "../feature/todo/todoSlice"

function Todo() {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    return (
      <>
      <div>
      {todos.map((todo)=>{
        <li key={todo.id}>
            {todo.text}
            <button onClick={}>Delete</button>
        </li>
      })}
      </div>
      </>
    )
  }
  
  export default Todo