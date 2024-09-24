import { useDispatch, useSelector } from "react-redux"
import {removeTodo, updateTodo} from "../feature/todo/todoSlice"
import "../components/Todo.css"


function Todo() {

  const todos = useSelector((state) => state.todos.todos)
  const dispatch = useDispatch()

  const handleEdit = (todo)=>{
    const newText = prompt('enter new text')
    if(newText.trim() === ''){
      return;
    }
    

    if(newText){
      dispatch(updateTodo({id:todo.id, newText}))
    }

    }
    
   return (
    <>
   <div className="main-div">
  {todos && todos.length > 0 ? (
    todos.map((todo) => (
      <div className="inner" key={todo.id}>
        <div>
        <h3>{todo.text}</h3>
        </div>
       <div>
       <button className="delete" onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
       <button className="edit" onClick={()=>handleEdit(todo)}>Edit</button>
       </div>
      </div>
    ))
  ) : (
    <p className="para">No Todos found...</p>
  )}
</div>

    </>
     
    )
    
  }
  
  export default Todo