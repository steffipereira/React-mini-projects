import BlogList from './Blog/BlogList';
import useFetch from '../hooks/useFetch';

const Home = () => {
  const { data:blogs, loader, error } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="mt-3 container">
      { error && <div> Could not find resource </div>}
      { loader && <div> Loading... </div>}
      {
        blogs && <BlogList blogs={blogs} />
      }

    </div>
  );
}

export default Home;
