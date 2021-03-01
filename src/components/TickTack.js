import Game from "./Game"
import Todo from "./TodoApp/Todo.js"
import useFetch from '../hooks/useFetch';

const TickTack = () => {
  const { data:todos } = useFetch('http://localhost:8000/todos')
  return (
    <div className="mt-3">
      <div className="d-flex flex-row justify-content-between">
        <div>
          <h2>Tick tac</h2>
          <Game />
        </div>

        <div>
        <h2>Todo List</h2>
          <Todo todos={todos}/>
        </div>
      </div>
    </div>
   );
}

export default TickTack;
