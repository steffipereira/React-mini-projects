import BlogList from './BlogList';
import { useState, useEffect, useCallback } from 'react';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(true);

  // useEffect(() => {
  //   fetch('http://localhost:8000/blogs')
  //   .then(response => response.json())
  //   .then(json => console.log(json))
  // }, [])

  const handleFetch = useCallback(async () => {

    const response = await fetch('http://localhost:8000/blogs');
    if (!response.ok) {
      setLoader(false)
      setError(true)
    } else {
      const data = await response.json();
        setError(false)
        setLoader(false)
        setTimeout(() => {
          setBlogs(data)
        }, 500);
    }

  },[]);

  useEffect(() => {
    handleFetch()
  },[]);

  return (
    <div className="mt-3">
      { error && <div> Could not find resource </div>}
      { loader && <div> Loading... </div>}
      {
        blogs && <BlogList blogs={blogs} />
      }

    </div>
  );
}

export default Home;
