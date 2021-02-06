import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

const Login = () => {
  const [ playerOne, setPlayerOne ] = useState('');
  const [ playerTwo, setPlayerTwo ] = useState('');

  const handleSubmit = () => {
    console.log("you have submited")
    setPlayerOne(playerOne)
    setPlayerTwo(playerTwo)
  }

  return (
  <Form onSubmit={handleSubmit}>
    <Form.Group>
      <Form.Label>Player 1</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter your name"
        value={playerOne}
        onChange={(e)=> setPlayerOne(e.target.value)}
      />
      {playerOne}
    </Form.Group>
    <Form.Group>
      <Form.Label>Player 2</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter your name"
        value={playerTwo}
        onChange={(e)=> setPlayerTwo(e.target.value)}
      />
      {playerTwo}
    </Form.Group>
    <Button variant="primary">Submit</Button >Submit
  </Form>
  );
}

export default Login;
