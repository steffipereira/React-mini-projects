import Todo from "./TodoApp/Todo"

const TodoList = () => {
  return (
    <div className="mt-3 container">
      <div className="d-flex flex-column">
        <h2>Todo List</h2>
          <Todo />
      </div>
    </div>
   );
}

export default TodoList;
