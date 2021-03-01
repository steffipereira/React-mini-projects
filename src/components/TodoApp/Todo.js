import { InputGroup, Form, FormControl, Button } from 'react-bootstrap'
import TodoList from "./List"
import TodoTask from './Task'
import AddTask from "./AddTask"
import { useState, useEffect, useCallback } from 'react'
import { nanoid } from "nanoid";
import useFetch from '../../hooks/useFetch';

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
    },
    {
      "id": "AMr5sA241CaYn0TwQn_9K",
      "task": "asda",
      "isChecked": false
    },
    {
      "id": "51gXCZz4MjSBBcCcyxZ8H",
      "task": "asda",
      "isChecked": false
    },
    {
      "id": "_tik3t2eB9kIx9IzhfEnN",
      "task": "asda",
      "isChecked": false
    },
    {
      "id": "7l6N-0LSTlvx3cGYBRInc",
      "task": "oyu",
      "isChecked": false
    }
  ]
const Todo = () => {
  // const { data:todos } = useFetch('http://localhost:8000/todos')

  const [list, setList] = useState(TODO)
  const [newTask, setNewTask] = useState('')

  const handleSubmit = async(e) => {
      e.preventDefault()
      const task = { id: nanoid(),  task: newTask, isChecked: false }
    //   await fetch('http://localhost:8000/todos', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(task)
    // });
    const newList = [task, ...list]
    setList(newList)
    setNewTask('')

  }
  const handleChecked = (id) => {
    const updatedTask = list.map(task => {
      if(task.id === id) {
        return { ...task, isChecked: !task.isChecked}
      }
      return task
    })
    setList(updatedTask)
  }

  const handleCompleted = () => {
    const completedTask = list.filter(task => task.isChecked)
    setList(completedTask)
  }

  const handlePendingTask = () => {
    const pendingTask = list.filter(task => !task.isChecked)
    setList(pendingTask)
  }

  const handleAllTask = () => {
    setList(TODO)
  }

  const deleteTask = (id) => {
    debugger
    const deletedTask = list.filter(task => task.id !== id)
    setList(deletedTask)
  }

  console.log(list)
  return (
    <div>
      <AddTask
        task={newTask}
        handleSubmit={handleSubmit}
        setNewTask={setNewTask}
      />
        <Button
          variant="primary"
          className="mb-3 btn-sm"
          onClick={handleAllTask}
        >
          All task
        </Button>

        <Button
          variant="success"
          className="mb-3 btn-sm mx-3"
          onClick={handleCompleted}
        >
          Completed task
        </Button>

        <Button
          variant="warning"
          className="mb-3 btn-sm"
          onClick={handlePendingTask}
        >
          Pending task
        </Button>
        <TodoList
          todos={list}
          handleChecked={handleChecked}
          deleteTask={deleteTask}
        />
    </div>
  );
}

export default Todo;
