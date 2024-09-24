import { useDispatch, useSelector } from "react-redux"
import {removeTodo} from "../feature/todo/todoSlice"

function Todo() {

    const todos = useSelector((state) => state.todos.todos)
    
    const dispatch = useDispatch()
   return (
    <>
   <div>
  {todos && todos.length > 0 ? (
    todos.map((todo) => (
      <div key={todo.id}>
        <li>{todo.text}</li>
        <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
      </div>
    ))
  ) : (
    <p>No Todos found...</p>
  )}
</div>

    </>
     
    )
    
  }
  
  export default Todo