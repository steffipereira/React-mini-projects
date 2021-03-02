import TodoTask from './Task'

const TodoList = ({ todos, handleChecked, deleteTask }) => {
  return (
    <div>
      <ul className="list-unstyled">
        {todos && todos.map(todo => (
          <TodoTask
            task={todo.task}
            isChecked={todo.isChecked}
            id={todo.id}
            key={todo.id}
            handleChecked={handleChecked}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
   );
  }

export default TodoList;
