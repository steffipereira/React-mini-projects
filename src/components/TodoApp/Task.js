import { useState, useEffect, useCallback } from 'react'

const TodoTask = ({task, isChecked, id, handleChecked, deleteTask}) => {
  return (
    <div>
      <li className="mt-2">
        <div className="input-group mb-3 container">
          <input
            id={id}
            className="form-check-input"
            type="checkbox"
            defaultChecked={isChecked}
            onChange={() => handleChecked(id)}
          />
          <label>{task}</label>
          <button
            className="btn btn-sm btn-outline-danger mx-2"
            onClick={() => deleteTask(id)}
          >
            Delete
          </button>
          <button className="btn btn-sm btn-outline-success">
            Edit
          </button>
        </div>
      </li>
    </div>
   );
}

export default TodoTask;
