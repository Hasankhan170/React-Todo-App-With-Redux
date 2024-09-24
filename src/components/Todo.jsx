import { useDispatch, useSelector } from "react-redux"
import {removeTodo} from "../feature/todo/todoSlice"

function Todo() {

    const todos = useSelector((state) => state.todos)
    console.log(todos);
    const dispatch = useDispatch()
    if (todos.length === 0) {
      return (
        <div>
          <p>No Todos found...</p>
        </div>
      )
  }
    
   
    return (
      <>
       <div>
        <ul>
          {todos.map((todo) => (
            <li style={{ color: 'black' }} key={todo.id}>
              {todo.text}
              <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      </>
     
    )
    
  }
  
  export default Todo