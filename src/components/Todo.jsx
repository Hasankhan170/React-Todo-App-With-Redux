import { useDispatch, useSelector } from "react-redux"
import {removeTodo} from "../feature/todo/todoSlice"

function Todo() {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    return (
      <>
      <div>
      {todos.length > 0 ? todos.map((todo)=>{
            <li key={todo.id}>
                {todo.text}
                <button onClick={()=>dispatch(removeTodo(todo.id))}>Delete</button>
            </li>
          }
      ) : <p>No Todo Founds..</p>}
      </div>
      </>
    )
  }
  
  export default Todo