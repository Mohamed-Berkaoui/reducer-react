import axios from 'axios'
import React, { createContext, useEffect, useReducer } from 'react'
export const todosStore=createContext()

function TodosContext({children}) {
    function reducer(state,action){//{type:,payload:}
    if(action.type=="getTodos"){
      return action.payload
    }
    else if(action.type=="addTodo"){
      return [...state,action.payload]
    }
    else if(action.type=="deleteTodo"){
      return state.filter(todo=>todo.id==action.payload.id?false:true)
    }
    else if(action.type=="updateTodo"){
      return state.map(element=>element.id==action.payload.id?{...element,status:!element.status}:element)
    }

  }
  const [todos,dispatch]=useReducer(reducer,[])
  
  useEffect(function(){
    axios.get('http://localhost:3000/todos')
    .then(res=>dispatch({type:'getTodos',payload:res.data}))
},[])
  return (
    <todosStore.Provider value={{todos,dispatch}}>
        {children}
    </todosStore.Provider>
  )
}

export default TodosContext