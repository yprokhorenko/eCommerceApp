import { instanceRequest } from "../instanceRequest";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await instanceRequest.get(url);
        setData(response.data.data);
        console.log(data);
      } catch (err) {
        setError(true)
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);
  return {data, loading, error}
};

export default useFetch;