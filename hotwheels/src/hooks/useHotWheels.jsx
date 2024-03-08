import { useState, useEffect } from 'react';
import axios from 'axios';

const useHotWheels = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError('Erro ao carregar os dados');
        setLoading(false);
      }
    };

    fetchData();
  }, [url, refetch]); 

  return { data, loading, error, refetch: () => setRefetch(!refetch) };
}

export default useHotWheels;
