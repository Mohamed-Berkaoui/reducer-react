import React, { useContext } from 'react'
import { todosStore } from '../TodosContext'
import axios from 'axios'

function Box({todo}) {
    const {dispatch}=useContext(todosStore)
    function handleDelete(){
        axios.delete("http://localhost:3000/todos/"+todo.id)
        .then(res=>dispatch({type:"deleteTodo",payload:todo}))
    }
    function handleUpdate(){
        axios.put("http://localhost:3000/todos/"+todo.id,{...todo,status:!todo.status})
        .then(res=>dispatch({type:"updateTodo",payload:todo}))
    }
  return (
    <div className='box'>
        <h4>{todo.task}</h4>
        <p>{todo.status?"done":"pending"} </p>
        <button onClick={handleUpdate}>switch state</button>
        <button onClick={handleDelete}>delete</button>
    </div>
  )
}

export default Box