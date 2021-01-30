import { Card, Button } from 'react-bootstrap'

const BlogList = ({ blogs }) => {
  return (
    <div className="d-flex justify-content-start">
      { blogs.map(blog => (
        <Card key={blog.id} className="mr-2">
        <Card.Body>
          <Card.Title>{blog.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{blog.author}</Card.Subtitle>
          <Card.Text>
            {blog.body.slice(0, 40).concat('...')}
          </Card.Text>
          <Button className="mr-2">Read More</Button>
        </Card.Body>
      </Card>
      )) }
    </div>
   );
}

export default BlogList;
