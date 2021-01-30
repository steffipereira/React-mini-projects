
import { useState, useEffect, useCallback } from 'react';

const useFetch = (url) => {
  const [data, setBlogs] = useState(null);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(true);

  const handleFetch = useCallback(async () => {

    const response = await fetch(url);
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

  },[url]);

  useEffect(() => {
    handleFetch()
  },[]);

  return { data, loader, error}
}

export default useFetch;
