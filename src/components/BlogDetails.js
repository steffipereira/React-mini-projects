import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data:blogs, loader, error } = useFetch('http://localhost:8000/blogs/' + id);

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
        </div>

      }

    </div>
  );
}

export default BlogDetails;
