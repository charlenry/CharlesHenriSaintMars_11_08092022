import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [errorType, setErrorType] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!url) return;  /* exit from useEffect() */
    setIsLoading(true);

    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (err) {
        setHasError(true);
        setErrorType(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, hasError, errorType, isLoading };
}

export default useFetch;