import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import TodosContext from "./TodosContext";

function App() {
  return (
    <TodosContext>
      <div>
        <Todos />
        <AddTodo />
      </div>
    </TodosContext>
  );
}

export default App;
