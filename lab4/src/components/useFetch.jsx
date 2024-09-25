import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);  // Стан для збереження отриманих даних
  const [error, setError] = useState(null); // Стан для збереження помилок
  const [loading, setLoading] = useState(true); // Стан для відображення завантаження

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);  // Початок завантаження
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);  // Збереження отриманих даних
      } catch (error) {
        setError(error.message);  // Збереження повідомлення про помилку
      } finally {
        setLoading(false);  // Завершення завантаження
      }
    };

    fetchData();
  }, [url]);  // Викликається щоразу, коли змінюється URL

  return { data, error, loading };  // Повертаємо стан завантаження, дані та помилку
};

export default useFetch;
