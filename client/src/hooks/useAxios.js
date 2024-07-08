import { useState, useEffect } from "react";

const useAxios = (configObj) => {
  const { axiosInstance, method, url, requrestConfig = {} } = configObj;

  const [resonse, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      console.log(requrestConfig);
      try {
        const res = await axiosInstance[method.toLowerCase()](url, {
          ...requrestConfig,
          signal: controller.signal,
        });
        console.log(res);
        setResponse(res.data);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    //useEffect cleanup function
    return () => controller.abort();
  }, []); // runs only when the component mounts

  return [response, error, loading];
};

export default useAxios;
