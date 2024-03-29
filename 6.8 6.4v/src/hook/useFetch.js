import { useEffect, useState } from "react";

export function useFetch(path) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const baseUrl = `https://jsonplaceholder.typicode.com${path}`;
  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return { users, loading, error };
}