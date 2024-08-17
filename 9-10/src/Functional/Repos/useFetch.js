import { useState, useEffect } from 'react';

const useFetch = (nick) => {
    const [repos, setRepos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFunc = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${nick}/repos`);
                if (!response.ok) {
                    if (response.status === 404) {
                        throw new Error("User not found");
                    }
                    throw new Error("Network response: " + response.statusText);
                }
                const data = await response.json();
                setRepos(data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchFunc();
    }, [nick]);

    return { repos, error };
};

export default useFetch;
