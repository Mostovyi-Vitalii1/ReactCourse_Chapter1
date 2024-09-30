import { useState, useEffect } from 'react';

const useLoading = (loading) => {
  const [isLoading, setIsLoading] = useState(loading);

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  return isLoading;
};

export default useLoading;
