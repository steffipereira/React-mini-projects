import { Form } from 'react-bootstrap'
import { useState, useEffect, useCallback } from 'react'

const AddTask = ({handleSubmit, task, setNewTask}) => {
  return (
    <div>
      <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Enter your task"
              value={task}
              onChange={(e)=> setNewTask(e.target.value)} />
            <Form.Text className="text-muted">
              Required
            </Form.Text>
          </Form.Group>
        </Form>
    </div>
   );
}

export default AddTask;
