import { useParams } from "react-router-dom";
import { Button } from 'react-bootstrap'
import useFetch from "../../hooks/useFetch";
import { useHistory } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();
  const { data:blogs, loader, error } = useFetch('http://localhost:8000/blogs/' + id);
  const redirect = useHistory();

  const handleDelete = async() => {
    await fetch('http://localhost:8000/blogs/' + id, {
      method: 'DELETE'
    })
    redirect.push('/');
  }

  return (
    <div className="blog-details">
      { error && <div> Could not find resource </div>}
      { loader && <div> Loading... </div>}
      { blogs &&
        <div className="my-3">
          <h4>{blogs.title}</h4>
          <small>{blogs.author}</small>
          <article>
            {blogs.body}
          </article>
          <Button variant="danger" onClick={handleDelete} >Delete</Button>
        </div>

      }

    </div>
  );
}

export default BlogDetails;
