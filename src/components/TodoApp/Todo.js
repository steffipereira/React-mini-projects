import TodoList from "./List"
import AddTask from "./AddTask"
import { useState } from 'react'
import { nanoid } from "nanoid";
import Buttons from './Buttons'
// import useFetch from '../../hooks/useFetch';

const TODO = [
  {
      "id": 1,
      "task": "Eat",
      "isChecked": true
    },
    {
      "id": 2,
      "task": "Drink",
      "isChecked": false
    },
    {
      "id": 3,
      "task": "Sleep",
      "isChecked": true
    }
  ]
const Todo = () => {
  // const { data:todos } = useFetch('http://localhost:8000/todos')
  const [list, setList] = useState(TODO)
  const [newTask, setNewTask] = useState('')
  const [buttons, setButtons] = useState('all')
  const taskNoun = list.length ? 'tasks' : 'task'

  const handleSubmit = async(e) => {
    e.preventDefault()
    const task = {
      id: nanoid(),
      task: newTask,
      isChecked: false
    }
    //   await fetch('http://localhost:8000/todos', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(task)
    // });
    const newList = [task, ...list]
    setList(newList)
    setNewTask('')
  }
  const TASK_BUTTONS = {
    all: () => true,
    completed: task => task.isChecked,
    pending: task => !task.isChecked,
  }

  const TASK_BUTTONS_VALUE = Object.keys(TASK_BUTTONS)

  const handleChecked = (id) => {
    const updatedTask = list.map(task => {
      if(task.id === id) {
        return { ...task, isChecked: !task.isChecked}
      }
      return task
    })
    setList(updatedTask)
  }

  const deleteTask = (id) => {
    const deletedTask = list.filter(task => task.id !== id)
    setList(deletedTask)
  }
  return (
    <div>
      <AddTask
        task={newTask}
        handleSubmit={handleSubmit}
        setNewTask={setNewTask}
      />
      <h4>{list.length} {taskNoun} remaining</h4>
      {TASK_BUTTONS_VALUE.map(name => (
        <Buttons
          key={name}
          setButtons={setButtons}
          text={name}
        />
      ))}
      <TodoList
        todos={list.filter(TASK_BUTTONS[buttons]).map(task => task)}
        handleChecked={handleChecked}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default Todo;
