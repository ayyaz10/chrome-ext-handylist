import { useState, useCallback } from "react";

function useFetch(fundState) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(
    async (url, method = "GET", body = null) => {
      setLoading(true);
      try {
        const options = {
          method,
          headers: { "Content-Type": "application/json" },
        };
        if (body) {
          options.body = JSON.stringify(body);
        }
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setData(data);
        return data;
      } catch (err) {
        setError(err.message);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [fundState]
  );

  return { data, loading, error, fetchData };
}

export default useFetch;
