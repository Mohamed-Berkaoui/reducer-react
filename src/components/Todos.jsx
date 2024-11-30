
import { useContext } from 'react'
import Box from './Box'
import { todosStore } from '../TodosContext'

function Todos() {
    const {todos}=useContext( todosStore)
  return (
    <div className='todos-container'>
        {todos.map(todo=><Box key={todo.id} todo={todo}/>)}

    </div>
  )
}

export default Todos