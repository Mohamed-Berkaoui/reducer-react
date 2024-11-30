import axios from 'axios'
import React, { useContext, useRef } from 'react'
import { todosStore } from '../TodosContext'

function AddTodo() {
    const referance=useRef()
    const {dispatch}=useContext(todosStore)
    function handleAdd(){
        const todo={task:referance.current.value,status:false}
        axios.post('http://localhost:3000/todos',todo)
        .then(res=>dispatch({type:"addTodo",payload:res.data}))
    }
  return (
    <div className='form'>
        <input type="text"  ref={referance}/>
        <button  onClick={handleAdd}> add todo</button>
    </div>
  )
}

export default AddTodo