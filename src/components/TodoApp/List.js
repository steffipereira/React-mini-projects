import TodoTask from './Task'
import { useState, useEffect, useCallback } from 'react'

const TodoList = ({ todos, handleChecked, deleteTask }) => {
  return (
    <div>
      <ul className="list-unstyled">
       {/* <h4>{todos.length} task remaining</h4> */}
        { todos && todos.map(todo => (
          <TodoTask
            task={todo.task}
            isChecked={todo.isChecked}
            id={todo.id}
            key={todo.id}
            handleChecked={handleChecked}
            deleteTask={deleteTask}
          />
        )) }
      </ul>
    </div>
   );
}

export default TodoList;
