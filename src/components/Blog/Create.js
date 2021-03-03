import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Please Select');
  const [loading, setLoading] = useState(true);
  const redirect = useHistory();

  const handleSubmit = (async (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setLoading(false)
    // console.log(blog)
    await fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog)
    });
    setTimeout(() => {
        setLoading(true);
        redirect.push('/')
      }, 1000);
  })

  return (
    <div className="container">
      <h4>Create your own Blog</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Blog Title</Form.Label>
          <Form.Control type="text" placeholder="Enter blog title" value={title} onChange={(e)=> setTitle(e.target.value)} />
          {title}
          <Form.Text className="text-muted">
            Required
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Blog Body</Form.Label>
          <Form.Control as="textarea" rows={3} value={body} onChange={(e)=> setBody(e.target.value)} />
          {body}
        </Form.Group>
         <Form.Group>
          <Form.Label>Select Author</Form.Label>
          <Form.Control as="select" value={author} onChange={(e)=> setAuthor(e.target.value)} >
            <option value="Please Select">Please Select</option>
            <option value="Gary Gastelu">Gary Gastelu</option>
            <option value="Michaël van de Poppe">Michaël van de Poppe</option>
            <option value="Pooneh">Pooneh</option>
          </Form.Control>
          {author}
        </Form.Group>
        {
          loading && <Button variant="primary" type="submit"> Submit</Button>
        }
        {
          !loading && <Button variant="primary" type="submit"> Adding Blog</Button>
        }

      </Form>
    </div>
   );
}

export default Create;
