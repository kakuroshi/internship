export function fetchFirst(nick) {
    return new Promise((resolve, reject) => {
        // fetch(`https://api.github.com/users/${nick}/repos_1`)
        fetch(`https://api.github.com/users/${nick}/repos`)
            .then((response) => {
                if (!response.ok) {
                    if (response.status === 404) {
                        reject(new Error("User not found"));
                    }
                    reject(new Error("Network response: " + response.statusText));
                }
                return response.json();
            })
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(new Error("Problem with fetch: " + error.message));
            });
    });
}