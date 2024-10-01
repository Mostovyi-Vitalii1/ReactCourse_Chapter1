import { useState, useEffect } from 'react';

const useFetch = (url, method = 'GET', body = null) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null); 
      try {
        const options = {
          method,
          headers: {
            'Content-Type': 'application/json',
          },
        };
        if (body) {
          options.body = JSON.stringify(body); 
        }
        const response = await fetch(url, options);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method, body]); // Додаємо залежності для методу та тіла

  return { data, loading, error, setData };
};

export default useFetch;
