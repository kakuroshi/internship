import { useState, useEffect } from 'react';

interface Repo {
  name: string;
  clone_url: string;
  created_at: string;
  updated_at: string;
}

interface UseFetchResult {
  repos: Repo[];
  error: string | null;
}

const useFetch = (nick: string): UseFetchResult => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFunc = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${nick}/repos`);
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('User not found');
          }
          throw new Error('Network response: ' + response.statusText);
        }
        const data: Repo[] = await response.json();
        setRepos(data);
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchFunc();
  }, [nick]);

  return { repos, error };
};

export default useFetch;
